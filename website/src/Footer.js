

import React from "react";
import "./Footer.css"

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
function Footer(props) {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
    // Usage example:
    // <img className="project-logo" src={images['HomeHeader.png']} />


    return (

        <div className="content-section">
            <div className="content">

                <footer className="footer" style={{ backgroundImage: `url(${images['Footer.png']})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>Copyright © <a href="https://infoseeking.org/">InfoSeeking Lab </a>
                    2010-2022</footer>
            </div>
        </div >

    );
}



export default Footer;
