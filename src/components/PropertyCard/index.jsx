import { Link } from 'react-router-dom'
import './PropertyCard.scss'

function PropertyCard({ property }) {
    return (
        <Link
            to={`/property/${property.id}`}
            className="property-card"
        >
            <img
                src={property.cover}
                alt={property.title}
                className="property-card-image"
            />

            <div className="property-card-overlay"></div>

            <h2 className="property-card-title">
                {property.title}
            </h2>
        </Link>
    )
}

export default PropertyCard