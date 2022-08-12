import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

type OnlyCocktaile = {
    id: number,
    name: string,
    glass: string,
    category: string,
    ingredients: string,
    garnish: string,
    image: string,
    preparation: string

}
export function EachCoctails() {
    const [onecocktaile, setOneCocktaile] = useState<null | OnlyCocktaile>(null)
    const params = useParams()

    console.log("params:", params)

    useEffect(() => {
        fetch(`http://localhost:4000/coctails/${params.id}`)
            .then(resp => resp.json())
            .then(OneCocktailsFromServer => setOneCocktaile(OneCocktailsFromServer))
    }, [])
    return (
        <div className="only-one-recepie">
            <div className="recepie-image-title">
                <h1>{onecocktaile?.name}</h1>
                <img src={onecocktaile?.image} />
            </div>
            <div className="text-recepie">
                <h1><em>{onecocktaile?.category}</em></h1>
                <h2>Ingredients</h2>
                <p>{onecocktaile?.ingredients}</p>
                <h3>Glass</h3>
                <p>{onecocktaile?.glass}</p>
                <h3>Prepatation</h3>
                <p>{onecocktaile?.preparation}</p>
                <h3>Garnish with: {onecocktaile?.garnish}</h3>
            </div>
        </div>
    )
}