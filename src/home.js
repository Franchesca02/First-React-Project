import React from 'react';
import design from './Images/Design and build Image.png';
import icon from './Images/Icon.PNG';
import build from './Images/We design and build img.png';
import creative from './Images/Creative design image.png';
import photograph from './Images/Photographer image.png';
import testimonials from './Images/Our clients image.png';
import sponsors from './Images/Sponsors image.png';
import blog from './Images/From the blog.png';
import email from './Images/Enter email image.png';
import project from './Images/Have a project.png'
import office from './Images/Office and social media img.png';
import thumbs from './Images/Thumbs up.PNG';
import likes from './Images/Thumb.PNG';
import eye from './Images/Eye icon.png';
import message from './Images/Message.png';
import digitals from './Images/Creative digital img.png';
import zamil from './Images/Zamil image.png';
import excited from './Images/Excited image.png';
import designer from './Images/Icon.PNG';
import apple from './Images/Apple.PNG';
import facebook from './Images/Facebook icon.PNG';
import google from './Images/google.PNG';
import george from './Images/George.png';
import rodgers from './Images/rodgers.png';
import maruf from './Images/maruf.jpg';
import shah from './Images/shah.png';
import hassan from './Images/hassan.jpg';
import ahmmed from './Images/ahmmed.jpg';
import ai from './Images/maruf.jpg';
import adel from './Images/adel.png';
import mustapha from './Images/mustapha.png';
import taya from './Images/taya.jpg';
import fashion from './Images/Fashion.PNG';
import users from './Images/User interface.PNG';
import web from './Images/web.PNG';


function Home() {
    return (
        <div className="parent-div">
            <div className="design">
                <img src={design} alt="We design and build unique things" />
            </div>

            <div className="who-we-are">
                <img src={build} alt="who we are" />
            </div>

            <div className="creative">
                <img src={creative} alt="Creative design image" />
            </div>

            <div className="photograph">
                <img src={photograph} alt="Photographer's image" />
            </div>

            <div className="testimonials">
                <img src={testimonials} alt="What our clients are saying" />
            </div>

            <div className="sponsors">
                <img src={sponsors} alt="Our sponsors' image" />
            </div>

            <div className="blog">
                <img src={blog} alt="From our blog" />
            </div>

            <div className="email">
                <img src={email} alt="Enter your email address" />
            </div>

            <div className="project">
                <img src={project} alt="You can have a project with us" />
            </div>

            <div className="office">
                <img src={office} alt="Our office address" />
            </div>

            <div className="portfolio">
                <a href="#"><img src={thumbs} alt="Click to sign up or sign in" /></a>
                <h2 className="publication">Clean Portfolio Website Design</h2>

                <div className="social-media-engagements">
                    <a href="#"><img src={likes} alt="Number of likes" /></a><p>558</p>
                    <a href="#"><img src={eye} alt="Number of visits" /></a><p>18.7k</p>
                    <a href="#"><img src={message} alt="Number of comments" /></a><p>27</p>
                </div>

                <p className="publish">Published: October 26th 2020</p>
            </div>


            <div className="navigation-div">
                <div className="ahmed">
                    <div className="designer-zamil">
                        <img src={designer} alt="The designer's image" />
                    </div>
                    <div className="zam">
                        <p><a href="#">Zamil Ahmed</a></p>

                        <div className="click-btn">
                            <a href="#"><button>Follow</button></a>
                        </div>
                    </div>

                </div>

                <div className="project-profile">
                    <div className="digitals">
                        <a href="#"><img src={digitals} alt="The creative digital agency" /></a>
                    </div>
                    <div className="digitals">
                        <a href="#"><img src={zamil} alt="I am Zamil" /></a>
                    </div>
                    <div className="digitals">
                        <a href="#"><img src={excited} alt="We are excited" /></a>
                    </div>
                </div>
            </div>

            <div className="conversation">
                <h1 className="convo">Sign up to join the conversation</h1>
                <p className="convo-paragraph">Add your feedback for Zamil Ahmed's project by signing in or signing up</p>

                <div className="joining">
                    <a href="#"><button className="convo-paragraph">Sign Up With Email</button></a>
                    <p className="convo-paragraph">Or</p>
                    <a href="#"><img src={apple} alt="Apple icon" /></a>
                    <a href="#"><img src={facebook} alt="Facebook icon" /></a>
                    <a href="#"><img src={google} alt="Google icon" /></a>
                </div>
            </div>

            <div className="comments">

                <div className="george">
                    <div className="george-text">
                        <img src={george} alt="An icon of a commenter" />
                    </div>

                    <div className="george-image">
                        <a href="#"><h5>George Chkhikvadze</h5></a><p className="inner-text">7 days ago</p>
                    </div>
                </div>
                <div className="george-paragraph"><p>Very clean! I love it.</p></div>

                <div className="george">
                    <div className="george-text">
                        <img src={rodgers} alt="An icon of a commenter" />
                    </div>

                    <div className="george-image">
                        <a href="#"><h5>lashawnda rodgers </h5></a><p className="inner-text">a month ago</p>
                    </div>
                </div>
                <div className="george-paragraph"><p>I like it! Very clean and eye catching. Great job.</p>
                </div>

                <div className="george">
                    <div className="george-text">
                        <img src={maruf} alt="An icon of a commenter" />
                    </div>

                    <div className="george-image">
                        <a href="#"><h5>Md. Maruf Sarker </h5></a><p className="inner-text">a month ago</p>
                    </div>
                </div>
                <div className="george-paragraph"><p>great</p>
                </div>

                <div className="george">
                    <div className="george-text">
                        <img src={shah} alt="An icon of a commenter" />
                    </div>

                    <div className="george-image">
                        <a href="#"><h5>Md Shah Alam </h5></a><p className="inner-text">a month ago</p>
                    </div>
                </div>
                <div className="george-paragraph"><p>Great job! I like it</p></div>

                <div className="george">
                    <div className="george-text">
                        <img src={hassan} alt="An icon of a commenter" />
                    </div>

                    <div className="george-image">
                        <a href="#"><h5>Hassan Anjum </h5></a><p className="inner-text">2 months ago</p>
                    </div>
                </div>
                <div className="george-paragraph"><p>Great work!</p>
                </div>

                <div className="george">
                    <div className="george-text">
                        <img src={ahmmed} alt="An icon of a commenter" />
                    </div>

                    <div className="george-image">
                        <a href="#"><h5>Nur Ahmmed </h5></a><p className="inner-text">2 months ago</p>
                    </div>
                </div>
                <div className="george-paragraph"><p>Nice work!</p>
                </div>

                <div className="george">
                    <div className="george-text">
                        <img src={ahmmed} alt="An icon of a commenter" />
                    </div>

                    <div className="george-image">
                        <a href="#"><h5>Nur Ahmmed </h5></a><p className="inner-text">2 months ago</p>
                    </div>
                </div>
                <div className="george-paragraph"><p>Nice work!</p>
                </div>

                <div className="george">
                    <div className="george-text">
                        <img src={ai} alt="An icon of a commenter" />
                    </div>

                    <div className="george-image">
                        <a href="#"><h5>A.I</h5></a><p className="inner-text">2 months ago</p>
                    </div>
                </div>
                <div className="george-paragraph"><p>Nice work!</p>
                </div>

                <div className="george">
                    <div className="george-text">
                        <img src={adel} alt="An icon of a commenter" />
                    </div>

                    <div className="george-image">
                        <a href="#"><h5>Ahmed Adel</h5></a><p className="inner-text">2 months ago</p>
                    </div>
                </div>
                <div className="george-paragraph"><p>Great job! If you have a minute, please rate my project</p>
                </div>

                <div className="george">
                    <div className="george-text">
                        <img src={mustapha} alt="An icon of a commenter" />
                    </div>

                    <div className="george-image">
                        <a href="#"><h5>Md. Shihab Mustafa </h5></a><p className="inner-text">2 months ago</p>
                    </div>
                </div>
                <div className="george-paragraph"><p>Great job!!! I love the way everything came together. Nice balance of whitespace, the contrast of colors almost pops in my eye, looks very aestheticallly pleasing. Would really appreciate if you look into my work. Thanks in advance.</p>
                </div>

                <div className="george">
                    <div className="george-text">
                        <img src={taya} alt="An icon of a commenter" />
                    </div>

                    <div className="george-image">
                        <a href="#"><h5>Taya N</h5></a><p className="inner-text">2 months ago</p>
                    </div>
                </div>
                <div className="george-paragraph"><p>Great job!</p>
                </div>

                <div className="more-comments">
                    <a href="#"><p>See more Comments</p></a>
                </div>
            </div>

            {/* <div className="last-parent-div"> */}

            {/* <div className="left-div"> */}

<div className="mother">
            <div className="right-div">
                <div className="letters">
                    <h5 className="tools">TOOLS</h5>
                    <h5 className="press"><a href="#">WordPress</a></h5>
                    <h5 className="tools">CREATIVE FIELDS</h5>
                </div>

                <div className="fashion">
                    <a href="#"><img src={fashion} alt="Our fashion designs" /></a>
                </div>
                <div className="users">
                    <a href="#"><img src={users} alt="Our UX/UI designs" /></a>
                </div>
                <div className="web">
                    <a href="#"><img src={web} alt="Web design" /></a>
                </div>
            </div>
                </div>


            <div className="top">
                <div className="owners">
                    <h5>Owners</h5>
                </div>

                <div className="george">
                    <div className="george-text">
                        <img src={designer} alt="An icon of a commenter" />
                    </div>

                    <div className="design-image">
                        <a href="#"><h5>Zamil Ahmed</h5></a> <a href="#"><button className="owner-btn">Follow</button></a>
                    </div>
                </div>
                <div className="george-paragraph"><p>Dhaka, Bangladesh</p>
                </div>
            </div>


            <div className="bottom">

                <div className="inner-folio">
                    <h5 className="publics">Clean Portfolio Website Design</h5>
                    <div className="media-link">
                        <a href="#"><img src={likes} alt="Number of likes" /></a><p>558</p>
                        <a href="#"><img src={eye} alt="Number of visits" /></a><p>18.7k</p>
                        <a href="#"><img src={message} alt="Number of comments" /></a><p>27</p>
                    </div>
                    <p className="pub-low">Published: October 26th 2020</p>
                </div>
            </div>

            <div className="right-bottom">
                    <button className="website-btn">portfolio website</button>
                    <button className="website-btn">responsive website</button>
                    <button className="webdesign-btn">Web Design</button>
                    <button className="website-btn">Website Design</button>
                    <button className="website-btn">Wordpress Website</button>
                </div>

                <div className="copyright">
        <p>&copy; All Rights Reserved</p>
        <p>Report</p>
        </div>
<br />
        </div>
        
    );
}



export default Home;