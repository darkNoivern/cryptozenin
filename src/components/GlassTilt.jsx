import React from 'react'
import Tilt from 'react-vanilla-tilt'
import '../styles/glasstilt.css'

const GlassTilt = (props) => {
    return (
        <>
            <Tilt className="features-card text-warning p-3">
                <div className="feature-num d-flex justify-content-end">{props.number}</div>
                <div className="feature-title text-center mb-3">{props.title}</div>
                <div className="feature-desc">
                {props.desc}
                </div>
            </Tilt>
        </>
    )
}

export default GlassTilt
