import { NavLink } from 'react-router-dom'

import './Header.scss'

import logo from '../../assets/img/logo_header.svg'

function Header() {
    return (
        <header className="header">

            {/* Ajout du logo cliquable qui redirige vers la page d'accueil */}
            <NavLink
                to="/"
                className="header-logo"
            >
                <img
                    src={logo}
                    alt="Kasa"
                />
            </NavLink>

            <nav className="nav">

                <NavLink
                    to="/"
                    end
                    className="nav-link"
                >
                    Accueil
                </NavLink>

                <NavLink
                    to="/about"
                    className="nav-link"
                >
                    À propos
                </NavLink>

            </nav>

        </header>
    )
}

export default Header