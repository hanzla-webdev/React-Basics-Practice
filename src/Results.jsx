import Pet from "./Pet";

const Results = ({ pets }) => {

    

    return (
        <div>
            {!pets.length ? (
                <h1>pets not found</h1>
            )
                : (
                    pets.map((pet) => (
                        <Pet
                            name={pet.name}
                            animal={pet.animal}
                            id={pet.id}
                            breed={pet.breed}
                            images={pet.images}
                            location={`${pet.city}, ${pet.state}`}
                            key={pet.id}
                        />
                    ))
                )
            }
        </div>
    )
}

export default Results
