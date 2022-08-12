import { useEffect, useState } from "react"

export function Reviews() {
    const [onecoctalie, setOneCockatile] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/reviews')
            .then(resp => resp.json())
            .then(OneCoctalieFromServer => setOneCockatile(OneCoctalieFromServer))
    }, [])
    return (
        <div>
            <div className="recepies-text">
                <h1>
                    Reviews from our dear customers
                </h1>
            </div>
            <div className="create-reviews">
                <div className="each-customer-review">
                    <ul>
                        {onecoctalie.map(onlyone => (
                            <li>
                                <div className="each-customer-review-image">
                                    <img src={onlyone.profilePic} />
                                </div>
                                <div className="each-customer-review-text">
                                    <h3>{onlyone.username}</h3>
                                    <p>{onlyone.content}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    )
}

