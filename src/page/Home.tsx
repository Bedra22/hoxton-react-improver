import { useState } from "react";
import { Link } from "react-router-dom";

export function Home() {
    const [user, setUser] = useState([])
    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    return (
        <div>
            <div className="big-qoute">
                <div className="saying-nr-1">
                    <h1>
                        “A recipe has no soul. You, as the cook, must bring soul to the recipe.”
                    </h1>
                    <h2>
                        – Thomas Keller
                    </h2>
                </div>
                <div className="big-qoute-image">
                    <img src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                </div>
            </div>
            <div className="recepies-intro">
                <div className="recepies-intro-image">
                    <img src="https://images.pexels.com/photos/357743/pexels-photo-357743.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                </div>
                <div className="recepies-intro-text">
                    <h1>
                        <em>
                            MY PROMISE
                        </em>
                    </h1>
                    <p>
                        I hate the notion of a secret recipe. Recipes are by nature derivative and meant to be shared - that is how they improve, are changed, how new ideas are formed. To stop a recipe in it's tracks, to label it "secret" just seems mean.
                    </p>
                    <Link to='/recepies'>
                        <button>
                            Find out more here
                        </button>
                    </Link>
                </div>
            </div>
            <div className="motive">
                <h1>
                    All our products should help you live more consciously. For a fit, energetic & yummy life!
                </h1>
            </div>
            <div className="signin">
                <div className="signin-text">
                    <h3>Stay tuned and be the first with new information.</h3>
                    <h4>Because you deserve this.</h4>
                </div>
                <div>
                    <form className="signin-form"
                        onSubmit={event => {
                            event.preventDefault()

                            let oneuser = {
                                name,
                                email
                            }
                            console.log('user:', oneuser)
                            setName('')
                            setEmail('')
                            setUser([...user, oneuser])
                        }}
                    >
                        <input
                            type="text"
                            name="text"
                            placeholder="Enter Your name"
                            onChange={event => {
                                setName(event.target.value)
                            }}
                            value={name}
                            autoComplete='off'
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your email"
                            onChange={event => {
                                setEmail(event.target.value)
                            }}
                            value={email}
                            autoComplete='off'

                        />
                        <button>Sign in</button>
                    </form>
                </div>

            </div>
        </div>
    )
}
