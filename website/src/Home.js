import React from "react";
import "./Home.css"

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
function Home(props) {


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

                <div className="content-header">
                    <h3 className="project-name">Intelligent Agent</h3>
                    <img className="project-logo" src={images['HomeHeader.png']} alt="logo" />
                </div>

                <div className="users-persona">
                    <h3 className="">Users Persona</h3>
                    <div className="container">
                        <div className="row">
                            <img className="col-3" src={images['UserPersona-1.png']} alt="User-1" />
                            <div className="col-9">
                                <h4>App Usage</h4>
                                <ul>
                                    <li>5 minutes everyday for keeping track of interviews, schedule, and extracurriculars</li>
                                    <li>5 minutes everyday for coordinating groceries, bills, and other expenses</li>
                                    <li>10 minutes everyday for scheduling flights, hotels, and exploring the cities for interview</li>
                                    <li>10 minutes everyday for socializing with peers and arranging daily plan</li>
                                </ul>
                                <h5>In total about 30 minutes each day</h5>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-9">
                                <h4>App Usage</h4>
                                <ul>
                                    <li>5 minutes everyday for keeping track of interviews, schedule, and extracurriculars</li>
                                    <li>5 minutes everyday for coordinating groceries, bills, and other expenses</li>
                                    <li>10 minutes everyday for scheduling flights, hotels, and exploring the cities for interview</li>
                                    <li>10 minutes everyday for socializing with peers and arranging daily plan</li>
                                </ul>
                                <h5>In total about 30 minutes each day</h5>
                            </div>
                            <img className="col-3" src={images['UserPersona-2.png']} alt="User-2" />
                        </div>
                    </div>
                </div>

                <div className="use-case-example">
                    <div className="container">
                        <div className="row">
                            <img className="col-2 left" src={images['SpeechBubbleMan.png']} alt="User-2" />
                            <div className="col-8">
                                <h3 className="bold">Schedule some time for me tomorrow to look for dentists.</h3>
                                <p>No problem!</p>
                                <p>...</p>
                                <p className="longer-text">I have scheduled an event ‘Look for dentists’ tomorrow 1-2pm. I have also added information about nearby dentists in notes for your event.</p>
                                <br />
                            </div>
                            <img className="col-2 right" src={images['AppHomePage.png']} alt="User-2" />
                        </div>
                    </div>
                </div>

                <div className="functionality">
                    <h2 className="">Functionality</h2>
                    <div className="container">
                        <div className="row">
                            <img className="col-4 left" src={images['Functionality-Cooking.png']} alt="User-2" />
                            <div className="col-8">
                                <h3 className="bold">Cooking</h3>
                                <ul>
                                    <li>Ask IA to assist you with cooking a meal</li>
                                    <li>Ask IA to provide you with a meal matching or a diet meal</li>
                                    <li>Ask IA to assist you with defrost.</li>
                                    <li>Ask IA to assist you with making dessert</li>
                                    <li>Ask IA to assist you with making special sauces</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <img className="col-4 left" src={images['Functionality-DIY.png']} alt="User-2" />
                            <div className="col-8">
                                <h3 className="bold">Do-It-Yourself (DIY)</h3>
                                <ul>
                                    <li>Ask IA to guide you how to pitch a tent</li>
                                    <li>Ask IA to help you with fixing the broken light bulb</li>
                                    <li>Ask IA to learn the seeds planting knowledge</li>
                                    <li>Ask IA to help you with the skincare routine</li>
                                    <li>Ask IA to provide you with the workout plan</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <img className="col-4 left" src={images['Functionality-Calendar.png']} alt="User-2" />
                            <div className="col-8">
                                <h3 className="bold">Calendar Scheduling</h3>
                                <ul>
                                    <li>Ask IA to schedule a meeting/ classes/ specific time and place to meet with friends through IA.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <img className="col-4 left" src={images['Functionality-Shopping.png']} alt="User-2" />
                            <div className="col-8">
                                <h3 className="bold">Online Shopping</h3>
                                <ul>
                                    <li>Ask IA for the product that user want, then a list of suppliers would be shown up.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <img className="col-4 left" src={images['Functionality-Map.png']} alt="User-2" />
                            <div className="col-8">
                                <h3 className="bold">Map & GPS</h3>
                                <ul>
                                    <li>Ask IA for the best commute way to reach to the destination.</li>
                                    <li>IA can provide users with the current location</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <img className="col-4 left" src={images['Functionality-Text-1.png']} alt="User-2" />
                            <div className="col-8">
                                <h3 className="bold">Text and Message</h3>
                                <ul>
                                    <li>Ask IA to schedule time from the messages listed</li>
                                    <li>Ask IA to find and send with the voice content input to the specific contacts</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <img className="col-4 left" src={images['Functionality-Text-2.png']} alt="User-2" />
                            <div className="col-8">
                                <h3 className="bold">Text and Message</h3>
                                <ul>
                                    <li>Ask IA about the specific location listed in email</li>
                                    <li>Ask IA to generate reminder from email</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <img className="col-4 left" src={images['Functionality-Photo.png']} alt="User-2" />
                            <div className="col-8">
                                <h3 className="bold">Calendar Scheduling</h3>
                                <ul>
                                    <li>Ask IA about the common topics of the photo</li>
                                    <li>Ask IA about the location of the photo</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <img className="col-4 left" src={images['Functionality-Download.png']} alt="User-2" />
                            <div className="col-8">
                                <h3 className="bold">App Download</h3>
                                <ul>
                                    <li>Ask IA download applications / data / documents, etc...</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer">Copyright © <a href="https://infoseeking.org/">InfoSeeking Lab </a>
                     2010-2022</footer>

            </div>
        </div >

    );
}



export default Home;
