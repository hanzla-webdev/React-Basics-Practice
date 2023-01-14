
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { petApi, useGetPetByIdQuery } from './adoptingPetSlice'

const Details = () => {
  // const [pet, setPet] = useState([]);
  // const [petData, setPetData] = useState([]);
  const { id } = useParams();
  const { data, error, isLoading } = useGetPetByIdQuery(id);
  // console.log('data', data.animal)
  // console.log(data[0])
  // useEffect(() => {
  //   console.log("data", data);
  // }, [data, error])
  // const pet = data.pets[0];

  // useEffect(() => {
  //   requestPet()
  // }, [])

  // async function requestPet() {
  //   const test = await fetch(
  //     `http://pets-v2.dev-apis.com/pets?id=${id}`
  //   );
  //   const json = await test.json();
  //   console.log(json.pets[0]);
  //   setPet(json.pets[0])
  // }

  // const ali = "aasdf"

  return (
    <div className="details">
      {
        error ? (
          <div>Oh no, there was an error</div>
        ) : isLoading ? (
          <div>Loading...</div>
        ) : data ? (
          <div>
            <h1>{data.name}</h1>
            <h2>{data.animal} - {data.breed} - {data.city} - {data.state}</h2>
            <button>Adopt {data.name}</button>
            <p>{data.description}</p>
          </div>
        ) : null
      }
    </div>
  )
}

export default Details
