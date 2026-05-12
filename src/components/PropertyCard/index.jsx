import { Link } from 'react-router-dom'
import './PropertyCard.scss'

function PropertyCard({ location }) {
    return (
        <Link
            to={`/property/${location.id}`}
            className="property-card"
        >
            <img
                src={location.cover}
                alt={location.title}
                className="property-card-image"
            />

            <div className="property-card-overlay"></div>

            <h2 className="property-card-title">
                {location.title}
            </h2>
        </Link>
    )
}

export default PropertyCard