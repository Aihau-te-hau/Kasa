import { useState } from 'react'
import './Collapse.scss'

import deployed from '../../assets/img/arrow_deployed.svg'
import collapsed from '../../assets/img/arrow_collapsed.svg'

function Collapse({ title, content }) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapse">

            <div
                className="collapse-header"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3>{title}</h3>

                <span>
                    {isOpen ? (
                        <img src={deployed} alt="Deployed" />
                    ) : (
                        <img src={collapsed} alt="Collapsed" />
                    )}
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