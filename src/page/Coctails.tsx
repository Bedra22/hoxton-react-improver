import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function Coctails() {
    const [coctaile, setCoctaile] = useState([])
    const [searchcoctailes, setSearchCoctailes] = useState('')

    useEffect(() => {
        fetch('http://localhost:4000/coctails')
            .then(resp => resp.json())
            .then(CoctailFromServer => setCoctaile(CoctailFromServer))
    }, [])

    const filtercocktailes = coctaile.filter(filteredcoctlaies => filteredcoctlaies.name.toLowerCase().includes(searchcoctailes))
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
            <div className="search-recepies">
                <div className="search-recepies-input-div">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search here..."
                        onChange={event =>
                            setSearchCoctailes(event.target.value)} />
                    <button>🔍</button>

                </div>
            </div>
            <div className="recepies-loop">
                <div className="recepies-loop-div">
                    <ul>
                        {filtercocktailes.map(taile => (
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