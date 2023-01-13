import { useState, useEffect } from "react"

const localCache = {
    // "bird": ["dsdfa", "asdsad", ],
    // "cat": ["adfa", "adsf"],
}

const useBreedList = (animal) => {
    const [breedList, setBreedList] = useState([]);

    useEffect(() => {
        if (!animal) {
            setBreedList([]);
        } else if (localCache[animal]) {
            setBreedList(localCache[animal])
        } else {
            getBreedList();
        }

        async function getBreedList() {
            setBreedList([]);

            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            );
            const json = await res.json();
            // console.log(json);
            localCache[animal] = json.breeds || [];
            setBreedList(localCache[animal]);
            // console.log(breedList)
            // console.log(localCache)
        }
    }, [animal])
    return [breedList]
}

export default useBreedList
