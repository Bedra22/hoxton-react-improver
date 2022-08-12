import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function Coctails() {
    const [coctaile, setCoctaile] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/coctails')
            .then(resp => resp.json())
            .then(CoctailFromServer => setCoctaile(CoctailFromServer))
    }, [])
    return (
        <div>
            <div className="recepies-text">
                <h1>
                    Coctails
                </h1>
                <p>
                    “If life gives you lemon, make lemonade…and find someone whose life gave them vodka.”
                </p>
            </div>
            <div className="recepies-loop">
                <div className="recepies-loop-div">
                    <ul>
                        {coctaile.map(taile => (
                            <li>
                                <Link to={`/coctails/${taile.id}`} style={{ textDecoration: 'none' }}>
                                    <div className="one-recipe">
                                        <h1>{taile.name}</h1>
                                        <img src={taile.image} />
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>
        </div>
    )
}