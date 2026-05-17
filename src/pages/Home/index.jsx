import { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LocationCard from '../../components/PropertyCard';

import { getProperties } from '../../api/Properties';

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
        <div className="page">

            <section id="locations" className="dashboard-section">
                <div>
                    <h1 className="home-title">
                        Chez vous, partout et ailleurs
                    </h1>
                </div>
                

                <div className="locations-grid">
                    {recentLocations.map((location) => (
                        <LocationCard
                            key={location.id}
                            location={location}
                        />
                    ))}
                </div>
            </section>

        </div>
    )
}

export default Home