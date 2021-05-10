import React from 'react';


function Navbar(){
    return (
        <div className="head">
            <h3><a href="#">Behance</a></h3>
            <div className="list-items">
<ul>
    <li><a href="#">Discover</a></li>
    <li><a href="#">Livestreams</a></li>
    <li><a href="#">Jobs</a></li>
</ul>
</div>
<div className="search-btn">
<button>Search...</button>
</div>
<div className="sign-btn">
    <button className="login"><a href="#">Log In</a></button>
    <button className="signup"><a href="#">Sign Up</a></button>
</div>
        </div>
        
        
    );
}



export default Navbar;