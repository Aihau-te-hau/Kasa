import { Link } from "react-router-dom";
import './Error.scss';

function Error() {
    return (
        <div className="page">
            <div className="error-container">
                <h2 className="error-title">404</h2>
                <p className="error-message">
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <Link to="/" className="error-link">Retourner sur la page d'accueil</Link>
            </div>
        </div>
    );
}

export default Error;