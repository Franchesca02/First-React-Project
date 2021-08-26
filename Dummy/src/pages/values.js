import React from 'react';
import Icon from '../images/Rectangle 14.svg';
import Button from '../components/button';


function Values() {
    return (
        <div className="values">
<div className="project-icon">
<img src={Icon} alt="An an icon depicting our kind of projects" />
</div>

<div className="solution">
<h4 id="builds">We build top-notch custom web and mobile solutions</h4>
<p id="solution-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nisl facilisis ac tortor. Adipiscing lorem convallis
     dui facilisis malesuada morbi lectus congue. </p>
     <Button id="project-btn">Discuss your project with us</Button>
</div>

<div className="projects-and-services">
<div className="left-div">
    <div id="desc">
    <p>Project</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vive</p>
</div>
<button id="view">View services <span id="arrows">&#10141;</span></button>
</div>

<div className="right-div">
<div id="desc">
    <p>Services</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vive</p>
</div>
<button id="view-btn">View project <span id="arrows">&#10141;</span></button>
</div>

</div>
        </div>
    );
}
export default Values;