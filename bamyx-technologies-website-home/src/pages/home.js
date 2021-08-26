import React from 'react';
import Logo from '../images/image 1.svg';
import LineA from '../images/Rectangle 9.svg';
import LineB from '../images/Rectangle 8.svg';
import Laptop from '../images/Rectangle 6.svg';
import Button from '../components/button';


function Home() {

    return (
        <div className="homepage">
            {/* <Navbar /> */}
            <div className="welcome">
                <div className="left">

                    <p className="welcome-text">Welcome</p>
                    <h2 className="butt">We build top-notch custome web and mobile solutions</h2>

                    <Button className="btn">Get estimate of your project</Button>
                </div>
                <div className="right">
                    <div className="card">

                    </div>
                    <div className="overlay">
                        <img src={Laptop} alt="Card items" />
                    </div>
<div className="overlay-2">
<img src={Logo} alt="The html icon" />
</div>
<div className="lines">
<img src={LineA} alt="A line icon" className="first" />
<img src={LineB} alt="A line icon" className="second"  />
</div>
                </div>
            </div>
            <div className="aside">
<p>hello@bamyx.com</p>
<p>hello@bamyx.com</p>
<p>hello@bamyx.com</p>
</div>
        </div>

    );

}
export default Home;


