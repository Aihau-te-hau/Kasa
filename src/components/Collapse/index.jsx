import { useState } from 'react'
import './Collapse.scss'

// import deployed from '../../assets/img/arrow_deployed.svg'
import arrow from '../../assets/img/arrow_collapsed.svg'

function Collapse({ title, content }) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapse">

            <div
                className="collapse-header"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="collapse-title">
                    {title}
                </h3>

                <span>
                    <img
                        src={arrow}
                        alt="Toggle collapse"
                        className={`collapse-arrow ${isOpen 
                            ? 'open' 
                            : ''}`
                        }
                    />
                </span>
            </div>

            {isOpen && (
                <div className="collapse-content">
                    {content}
                </div>
            )}
        </div>
    )
}

export default Collapse