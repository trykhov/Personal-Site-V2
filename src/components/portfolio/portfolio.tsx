import React from 'react';
import SlideShow from '../slideshow/slideshow';

const Portfolio: React.FC = () => {
    return (
        <div className="info-box">
            <div className="content-box">
                <h1>Portfolio</h1>
                <SlideShow/>
            </div>
        </div>
    )
}

export default Portfolio;