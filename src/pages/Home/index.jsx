import { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PropertyCard from '../../components/PropertyCard';

import { getProperties } from '../../api/Properties';
import bannerImage from '../../assets/img/home_banner.png';

import './Home.scss'

function Home() {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        getProperties()
            .then((data) => {
                setLocations(data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    // Affichage des 6 premières locations
    const recentLocations = locations.slice(0, 6)

    return (
        <div className="home">

            <section className="home-banner">

                <img
                    src={bannerImage}
                    alt="Paysage"
                    className="home-banner-image"
                />

                <div className="home-banner-overlay"></div>

                <h1 className="home-title">
                    Chez vous, partout et ailleurs
                </h1>

            </section>

            <section className="properties-gallery">
                {recentLocations.map((property) => (
                    <PropertyCard
                        key={property.id}
                        property={property}
                    />
                ))}
            </section>

        </div>
    )
}

export default Home