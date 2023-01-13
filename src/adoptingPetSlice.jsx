// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const petApi = createApi({
    reducerPath: 'petApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pets-v2.dev-apis.com' }),
    endpoints: (builder) => ({
        getPetById: builder.query({
            query: (id) => `/pets?id=${id}`,
            transformResponse: (response) => response.pets[0],
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPetByIdQuery } = petApi