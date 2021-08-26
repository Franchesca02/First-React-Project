import React from 'react';
import Black from '../images/Rectangle 11.svg';
import Button from '../components/button';
// import Accordion from '../components/accordion';


function Design() {
    return (
        <div className="design">
<div className="design-strategy">
{/* <Accordion /> */}


<div className="black-icon">
    <img src={Black} alt="An icon displayed in a dark mode" />
</div>
</div>
<div className="bttn"><Button>Check our services</Button></div>
        </div>
    );
}
export default Design;