import React from 'react';
import { MenuItems } from "./menuitems"
import Logo from '../images/logo.svg';
import "./navbar.css";

class Navbar extends React.Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                {/* <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1> */}
                <div className="menu-icon">
                    <img src={Logo} alt="Page icon" />
                    <p>Bamyx Technologies</p>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                {/* <Button>WEBO</Button> */}
            </nav>
        )
    }
}

export default Navbar