import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <h1 className="logo">Kasa</h1>
                <p className="copyright">© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;