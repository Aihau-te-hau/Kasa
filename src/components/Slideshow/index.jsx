import { useState } from 'react'
import './Slideshow.scss'

function Slideshow({ pictures }) {

    const [current, setCurrent] = useState(0)

    const nextSlide = () => {
        setCurrent(
            current === pictures.length - 1
                ? 0
                : current + 1
        )
    }

    const prevSlide = () => {
        setCurrent(
            current === 0
                ? pictures.length - 1
                : current - 1
        )
    }

    return (
        <div className="slideshow">

            <img
                src={pictures[current]}
                alt="property"
                className="slideshow-image"
            />

            {pictures.length > 1 && (
                <>
                    <button
                        className="left-arrow"
                        onClick={prevSlide}
                    >
                        ❮
                    </button>

                    <button
                        className="right-arrow"
                        onClick={nextSlide}
                    >
                        ❯
                    </button>

                    <span className="slide-count">
                        {current + 1}/{pictures.length}
                    </span>
                </>
            )}
        </div>
    )
}

export default Slideshow