import { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PropertyCard from '../../components/PropertyCard';

import { getProperties } from '../../api/Properties';
import bannerImage from '../../assets/img/home_banner.png';

import './Home.scss'

function Home() {
    const [properties, setProperties] = useState([])

    // ici [] signifie que useEffect ne s'exécute qu'une seule fois au montage du composant
    useEffect(() => {
        getProperties()
            .then((data) => {
                setProperties(data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    // Affichage des n premières locations
    // const recentProperties = properties.slice(0, n)
    // Peut être remplacer par (erreur possible) :
    const recentProperties = properties
    // Et meme peut être remplacer l.51 à 56 par (et la déclaration de recentProperties peut être supprimée) :
    // {locations.map((location) => (
    //  <PropertyCard
    //    key={location.id}
    //    location={location}
    //  />
    // ))}

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
                {recentProperties.map((property) => (
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