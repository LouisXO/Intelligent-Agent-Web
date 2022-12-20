import React from "react";
import "./Functionality.css"
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

function Functionality(props) {


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

                {/* <div className=""> */}
                <img className="func-1" src={images['Functionality-1.png']} />
                {/* </div> */}

                <div style={{ backgroundImage: `url(${images['Functionality-2.png']})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="functionality">
                    {/* <img className="project-logo" src={images['Functionality-1.png']} /> */}

                    <h2 className="main">What Can AMI Do?</h2>
                    <div className="cooking">
                        <img className="pic" src={images['Functionality-Cooking.png']} />
                        <h3 className="title bold">Cooking</h3>
                        <ul >
                            <li>Ask IA to assist you with defrost.</li>
                            <li>Ask IA to assist you with cooking a meal.</li>
                            <li>Ask IA to assist you with making dessert.</li>
                            <li>Ask IA to assist you with making special sauces.</li>
                            <li>Ask IA to provide you with a meal matching or a diet meal.</li>

                        </ul>
                    </div>

                    <div className="DIY">
                        <img className="pic" src={images['Functionality-DIY.png']} />
                        <h3 className="title bold">DIY</h3>
                        <ul>
                            <li>Ask IA to help you with the skincare routine.</li>
                            <li>Ask IA to provide you with the workout plan.</li>
                            <li>Ask IA to learn the seeds planting knowledge.</li>
                            <li>Ask IA to help you with fixing the broken light bulb.</li>
                            <li>Ask IA to give you instructions for household appliances.</li>
                        </ul>
                    </div>

                    <div className="Calendar">
                        <img className="pic" src={images['Functionality-Calendar.png']} />
                        <h3 className="title bold">Calendar Scheduling</h3>
                        <ul>
                            <li>Ask IA to researve an appointment in the specific restaurant/recreation/location etc...</li>
                            <li>Ask IA to schedule a meeting/ classes/ specific time and place to meet with friends through IA.</li>

                        </ul>
                    </div>

                    <div className="map">
                        <img className="pic" src={images['Functionality-Map.png']} />
                        <h3 className="title bold">Map & GPS</h3>
                        <ul>
                            <li>IA can provide users with the current weather conditions.</li>
                            <li>Ask IA for the best commute way to reach to the destination.</li>

                        </ul>
                    </div>

                    <div className="image">
                        <img className="pic" src={images['Functionality-Image.png']} />
                        <h3 className="title bold">Image Recognition</h3>
                        <ul>
                            <li>Ask AMI about the location of the photo.</li>
                            <li>Ask AMI about the common topics of the photo.</li>

                        </ul>
                    </div>

                    <div className="shopping">
                        <img className="pic" src={images['Functionality-Shopping.png']} />
                        <h3 className="title bold">Online Shopping </h3>
                        <ul>
                            <li>Ask AMI to provide a list of suppliers of the items that users want.</li>
                        </ul>
                    </div>
                    <footer className="footer" style={{ backgroundImage: `url(${images['Footer.png']})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>Copyright © <a href="https://infoseeking.org/">InfoSeeking Lab </a>
                    2010-2022</footer>
                </div>
            </div>
        </div >

    );
}



export default Functionality;
