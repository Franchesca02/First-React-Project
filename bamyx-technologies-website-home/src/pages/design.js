import React from 'react';
import Black from '../images/Rectangle 11.svg';
import Button from '../components/button'


function Design() {
    return (
        <div className="design">
<div className="design-strategy">
<div className="list-items">
    <ul>
        <li className="lists"><span id="plus">&#43;  Strategy</span></li>
        <li className="lists"><span id="plus">&#43;  Design</span></li>
        <li className="lists"><span id="plus">&#8722;  Development</span></li>
    </ul>
    <p>We develop completely bespoke functioning and visually appealing
        web, desktop and mobile applications that precisely suits your business
    </p>
    <div className="bttn">
<Button>Check Our Services</Button>
    </div>
</div>

<div className="black-icon">
    <img src={Black} alt="An icon displayed in a dark mode" />
</div>
</div>
        </div>
    );
}
export default Design;