import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
type OnlyRecipie = {
    id: number,
    name: string,
    ingredients: string,
    steps: string,
    imageURL: string
}
export function EachRecipe() {
    const [onerecepie, setOneRecepies] = useState<null | OnlyRecipie>()
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:4000/recepies/${params.id}`)
            .then(resp => resp.json())
            .then(OneRecepiesFromServer => setOneRecepies(OneRecepiesFromServer))
    }, [])
    return (
        <div className="only-one-recepie">
            <div className="recepie-image-title">
                <h1>{onerecepie?.name}</h1>
                <img src={onerecepie?.imageURL} />
            </div>
            <div className="text-recepie">
                <h3>Ingredients</h3>
                <h4>{onerecepie?.ingredients}</h4>
                <p>{onerecepie?.steps}</p>
            </div>
        </div>
    )
}