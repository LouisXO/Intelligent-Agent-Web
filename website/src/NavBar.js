import React from "react";

import { NavLink } from "react-router-dom";
import './NavBar.css';




function NavBar(props) {


    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));


    return (
        <div className="top_navbar" style={{ backgroundImage: `url(${images['NavBG.png']})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <img className="logo" src={images['Ami-Nav.png']} alt="logo" />


            {/* <NavLink className="active navlink icon" to="/" >
                <img className="project-logo navlink" src={images['Ami-Nav.png']} alt="logo" />
            </NavLink> */}
            <div className="navbar_right">
                <li>
                    <NavLink exact="true" className="inactive navlink" activeClassName="active" to="/home" >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact="true" className="inactive navlink" activeClassName="active" to="/functionality">
                        Functionality
                    </NavLink>
                </li>
                <li>
                    <NavLink exact="true" className="inactive navlink" activeClassName="active" to="/about">
                        About Us
                    </NavLink>
                </li>
            </div>
        </div>

    )

}

export default NavBar;