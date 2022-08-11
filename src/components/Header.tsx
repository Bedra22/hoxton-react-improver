import { Link } from "react-router-dom";

export function Header() {
    return (
        <div className="header">
            <h1><em>H o x t o n  <br /> R e c e p i e s</em></h1>

            <ul>
                <div className="header-ul-li-div">
                    <Link style={{ textDecoration: 'none' }} to='/home' >
                        <li>
                            HOME
                        </li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/recepies'>
                        <li>
                            RECIPES
                        </li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/coctails'>
                        <li>
                            COCKTAILS
                        </li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/philosophy'>
                        <li>
                            PHILOSOPHY
                        </li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='reviews'>
                        <li>
                            REVIEWS
                        </li>
                    </Link>
                </div>
            </ul>
        </div>
    )
}