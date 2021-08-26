import React from 'react';
import Button from '../components/button';



function About() {
    return (
        <div className="about">
            <div className="texts">
                <div className="butn">
                <Button>WHO WE ARE</Button>
                </div>
                <div className="value">
                    <h2>We are a technology business that provides large-scale Saas
                        solutions to companies in a variety of imdustries.
                        we're innovative and we strive for excellence in all we do.</h2>
                </div>
                <div className="learn-more">
                <Button className="butn">Learm more about us</Button>
            </div>
            </div>

        </div>
    );
}
export default About;