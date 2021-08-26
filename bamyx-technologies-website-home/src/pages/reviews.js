import React from 'react';
import Face from '../images/Ellipse 1106.svg';
import Heads from '../images/Ellipse 1104.svg';
import Heading from '../images/Ellipse 1103.svg';
import Headings from '../images/Ellipse 1105.svg';
import LadyA from '../images/Ellipse 1100.svg';
import LadyB from '../images/Ellipse 1101.svg';
import LadyC from '../images/Ellipse 1102.svg';


function Reviews() {
    return (
        <div className="reviews">
            <h3 id="header">What our clients say</h3>
            <div className="clients">
                <div className="faces">
                    <div id="heading-image">
                    <img src={Heads} alt="An icon of human heads" />
                    </div>

                    <div id="heading">
                    <img src={Heading} alt="An icon of human heads" />
                    </div>

                    <div id="heading-img">
                    <img src={Headings} alt="An icon of human heads" />
                    </div>
                    
                </div>
                <div className="center">
                {/* <canvas id = "examplecanvas" width = "500" height = "300"> */}
                    <div className="clems">
                        <img src={Face} alt="An icon of a lady's face" />
                        <h6 id="hilary">Hilary Clement</h6>
                        <p id="date">02/06</p>
                    </div>
                    <hr />

                    <div className="middle-text">
                    <span>&#10094;</span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nisl facilisis ac tortor. Adipiscing lorem convallis dui facilisis malesuada morbi lectus congue.
                            Mattis egestas maecenas feugiat arcu at. Tortor libero, sollicitudin enim, lobortis. In enim, aliquet nisi phasellus sed lectus. Porta morbi nunc pellentesque enim a pellentesque amet, diam. Facilisis non, diam dignissim ut consequat rhoncus.
                        </p>
                        <p>
                            Facilisi mattis non in lorem phasellus maecenas.
                            Aliquam amet rhoncus commodo vestibulum aliquam interdum
                            malesuada tincidunt. Sit urna, lectus nibh et facilisis donec.
                            Etiam volutpat etiam ornare placera</p><span>&#10095;</span>
                    </div>
                    {/* </canvas> */}
                </div>

                <div className="reviewers">
                    <div id="top-icon">
<img src={LadyA} alt="An icon of a dark lady" />
                    </div>

                    <div id="middle-icon">
                    <img src={LadyB} alt="An icon of a fair guy" />
                    </div>

                    <div id="bottom-icon">
                    <img src={LadyC} alt="An icon of a fair lady" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Reviews;