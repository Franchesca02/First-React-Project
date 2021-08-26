import React from 'react';
import Phone from '../images/add image.svg';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


function Project() {
    return (
        <div className="projects">
            <h2 id="head">Our Projects</h2>
            <div className="our-project">
                <div className="slides">
                    <div className="description">
                        <p id="name">Name of Project</p>
                        <p>We are a technology business that provides large-scale Saas
                            solutions to companies in a variety of imdustries.
                            we're innovative and we strive for excellence in all we do.</p>
                    </div>
                    <div className="sliders">

                        <AliceCarousel autoPlay autoPlayInterval="2000">

                            <div className="slider-a">
                                <img src={Phone} alt="A phone icon" className="sliderimg" />
                            </div>
                            <div className="slider-b">
                                <img src={Phone} alt="A phone icon" className="sliderimg" />
                            </div>
                            <div className="slider-c">
                                <img src={Phone} alt="A phone icon" className="sliderimg" />
                            </div>
                            <div className="slider-d">
                                <img src={Phone} alt="A phone icon" className="sliderimg" />
                            </div>
                            <div className="slider-e">
                                <img src={Phone} alt="A phone icon" className="sliderimg" />
                            </div>
                        </AliceCarousel>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Project;