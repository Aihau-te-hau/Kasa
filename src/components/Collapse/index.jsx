import { useState } from 'react'
import './Collapse.scss'

function Collapse({ title, content }) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapse">

            <div
                className="collapse-header"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2>{title}</h2>

                <span>
                    {isOpen ? '⌃' : '⌄'}
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