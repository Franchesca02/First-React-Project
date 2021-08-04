import React from 'react';

import Navbar from '../components/navbar';
// import Card from '../images/Rectangle 5.svg';
import Laptop from '../images/Rectangle 6.svg';


function Home() {

    return (
        <div className="homepage">
            <Navbar />
            <div className="welcome">
                <div className="left">

                    <p className="welcome-text">Welcome</p>
                    <h2 className="butt">We build top-notch custome web and mobile solutions</h2>

                    <button className="btn">Get estimate of your project</button>
                </div>
                <div className="right">
                    <div className="card">

                    </div>
                    <div className="overlay">
                        <img src={Laptop} alt="Card items" />
                    </div>

                </div>
            </div>
        </div>

    );

}
export default Home;


