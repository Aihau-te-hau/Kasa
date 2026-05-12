import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <h1 className="logo">Kasa</h1>
                <nav className="nav">
                    <Link to="/" className="nav-link">
                        Accueil
                    </Link>
                    <Link to="/about" className="nav-link">
                        À propos
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;            