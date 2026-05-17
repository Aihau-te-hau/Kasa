import './Rating.scss'

import Star from '../../assets/img/star.svg?react'

function Rating({ rating }) {

    const stars = [1, 2, 3, 4, 5]

    return (
        <div className="rating">

            {stars.map((star) => (

                <Star
                    key={star}

                    className={
                        star <= rating
                            ? 'rating-star active'
                            : 'rating-star'
                    }
                />

            ))}

        </div>
    )
}

export default Rating