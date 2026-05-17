import { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'

import { getPropertyById } from '../../api/properties'

import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import Tags from '../../components/Tags'
import Rating from '../../components/Rating'
import Host from '../../components/Host'

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
        <div className="property-detail">

            <div className="property-slideshow">
                <Slideshow pictures={property.pictures} />
            </div>
            

            <div className="property-header">

                <div className="property-info">
                    <h1 className="property-title">
                        {property.title}
                    </h1>

                    <p className="property-location">
                        {property.location}
                    </p>

                    <Tags tags={property.tags} />
                </div>

                <div className="property-meta">

                    <Host host={property.host} />

                    <Rating rating={property.rating} />
                </div>
            </div>

            <div className="property-collapses">

                <div className="property-collapse property-description">
                    <Collapse
                    title="Description"
                    content={property.description}
                />
                </div>
                

                <div className="property-collapse property-equipments">
                    <Collapse
                        title="Équipements"
                        content={
                            <ul className="equipment-list">
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
        </div>
    )
}

export default Property