
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useGetPetByIdQuery } from './adoptingPetSlice'

const Details = () => {
  // const [pet, setPet] = useState([]);
  // const [petData, setPetData] = useState([]);
  const { id } = useParams();
  const {data, error, isLoading} = useGetPetByIdQuery(id);
  // const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  console.log(data)
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
    <div>
        <div>
          <h3>{id}</h3>
        </div>
    </div>
  )
}

export default Details
