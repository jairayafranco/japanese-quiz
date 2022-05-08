import { NavLink } from "react-router-dom"

export default () => {
    return(
        <nav>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/hiragana">Hiragana</NavLink>
        </nav>
    )
}