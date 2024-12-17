import { Link } from "react-router-dom";
import "./Nav.css"


function Nav() {
    return (
        <>
        <button>Noël</button>
        <button>Nouvel an</button>
        <button>Noël prochain</button>
        <Link to="/" className="NavLink">Noël</Link>
        </>
    )
}

export default Nav;