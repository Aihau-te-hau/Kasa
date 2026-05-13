import { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'

import { getPropertyById } from '../../api/properties'

import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'

import './PropertyDetail.scss'

function Property() {
    const { id } = useParams()

    const [property, setProperty] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        getPropertyById(id)
            .then((data) => {
                setProperty(data)
            })
            .catch(() => {
                setError(true)
            })
    }, [id])

    if (error) {
        return <Navigate to="/error" />
    }

    if (!property) {
        return <p>Chargement...</p>
    }

    return (
        <div className="property-page">

            <Slideshow pictures={property.pictures} />

            <div className="property-header">

                <div>
                    <h1>{property.title}</h1>

                    <p>{property.location}</p>

                    <div className="tags">
                        {property.tags.map((tag) => (
                            <span key={tag} className="tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="property-host">

                    <div className="host-info">
                        <span>{property.host.name}</span>

                        <img
                            src={property.host.picture}
                            alt={property.host.name}
                        />
                    </div>

                    <div className="rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={
                                    star <= property.rating
                                        ? 'star active'
                                        : 'star'
                                }
                            >
                                ★
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="property-collapses">

                <Collapse
                    title="Description"
                    content={property.description}
                />

                <Collapse
                    title="Équipements"
                    content={
                        <ul>
                            {property.equipments.map((equipment) => (
                                <li key={equipment}>
                                    {equipment}
                                </li>
                            ))}
                        </ul>
                    }
                />
            </div>
        </div>
    )
}

export default Property