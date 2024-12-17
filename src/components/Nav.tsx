import { Link } from "react-router-dom";
import "./Nav.css"


function Nav() {
    return (
        <nav>
        <Link to="/" className="NavLink">Noël</Link>
        <Link to="/page-new-year" className="NavLink">Nouvel an</Link>
        <Link to="/" className="NavLink">Noël prochain</Link>
        </nav>
    )
}

export default Nav;