import { Link } from 'react-router-dom';

import './Footer.scss'

import logoFooter from '../../assets/img/logo_footer.svg'

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <img
                    src={logoFooter}
                    alt="Kasa"
                    className="footer-logo"
                />

                <p className="copyright">
                    © 2020 Kasa. All rights reserved
                </p>

            </div>

        </footer>
    )
}

export default Footer