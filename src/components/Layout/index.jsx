import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

import './Layout.scss'

function Layout() {
    return (
        <div className="layout">
            <Header />

            <main className="layout-content">
                {/* Outlet permet d'insérer les routes enfants de Layout (Home, About, Error, PropertyDetail) */}
                <Outlet />
            </main>
            
            <Footer />
        </div>
    )
}

export default Layout