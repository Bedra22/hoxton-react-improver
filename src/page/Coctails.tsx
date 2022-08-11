import { useEffect, useState } from "react"

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
                                <div className="one-recipe">
                                    <h1>{taile.name}</h1>
                                    <img src={taile.image} />
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>
        </div>
    )
}