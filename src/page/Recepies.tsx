import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function Recepies() {
    const [recepies, setRecepies] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/recepies')
            .then(resp => resp.json())
            .then(RecepiesFromServer => setRecepies(RecepiesFromServer))
    }, [])
    return (
        <div>
            <div className="recepies-text">
                <h1>
                    Recepies
                </h1>
                <p>
                    We’ve organized these recipes every way we could think of so you don't have to! Dietary restrictions, weeknight dinners, meal prep recipes, some of our most tried-and-true… no matter how you browse, we’re sure you’ll find just what you were looking for.
                </p>
            </div>
            <div className="recepies-loop">
                <div className="recepies-loop-div">
                    <ul>
                        {recepies.map(OneRecipe => (
                            <li>
                                <Link to={`/recepies/${OneRecipe.id}`}>
                                    <div className="one-recipe">
                                        <h1>{OneRecipe.name}</h1>
                                        <img src={OneRecipe.imageURL} />
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    )
}