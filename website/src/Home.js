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
                            <img className="col-3" src={images['UserPersona-1.svg']} alt="UserPersona-1" />
                            <div className="col-9">
                                <h4>App Usage</h4>
                                <ul>
                                    <li>As a commuter, I want to ask IA for the faster way to get to the destination so that I choose the fastest way.</li>
                                    <li>As a cooking beginner, I want to ask IA to guide me through the cooking steps so that I do need to spend time on checking my phone while cooking.</li>
                                    <li>As a fitness enthusiast, I want to ask IA to provide me with a workout plan so that I can follow the muscle-building schedule and have a better performance.</li>
                                </ul>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-9">
                                <h4>App Usage</h4>
                                <ul>
                                    <li>As a student, I am new to skin care products, I want to ask IA for the skin care steps so that I’m not going to mess up the steps.</li>
                                    <li>As a dieter, I want to ask IA to provide me with a diet plan so that I can easily make myself daily healthy meals.</li>
                                    <li>As a solitary, I want to ask IA to assist me with fixing the household applications so that I can fix the broken tools by myself.</li>
                                    <li>As a flower lover, I want to ask IA to provide me with a guide to planting so that the plant can be grown better.</li>
                                    <li>As a coffee lover, I want to ask IA to help me to make coffee so that I can make different kinds of coffee by myself.</li>
                                </ul>
                            </div>
                            <img className="col-3" src={images['UserPersona-2.svg']} alt="UserPersona-2" />
                        </div>
                    </div>
                </div>

                <div className="functionality">
                    <h2 className="">Functionality</h2>
                    <div className="container">
                        <div className="row">
                            <img className="col-4 left" src={images['Functionality-Cooking.png']} alt="Functionality-Cooking" />
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
                            <img className="col-4 left" src={images['Functionality-DIY.png']} alt="Functionality-DIY" />
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
                            <img className="col-4 left" src={images['Functionality-Calendar.png']} alt="Functionality-Calendar" />
                            <div className="col-8">
                                <h3 className="bold">Calendar Scheduling</h3>
                                <ul>
                                    <li>Ask IA to schedule a meeting/ classes/ specific time and place to meet with friends through IA.</li>
                                    <li>Ask IA to researve an appointment in the specific restaurant/recreation/location etc...</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <img className="col-4 left" src={images['Functionality-Shopping.png']} alt="Functionality-Shopping" />
                            <div className="col-8">
                                <h3 className="bold">Online Shopping</h3>
                                <ul>
                                    <li>Ask IA for the product that user want, then a list of suppliers would be shown up.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <img className="col-4 left" src={images['Functionality-Map.png']} alt="Functionality-Map" />
                            <div className="col-8">
                                <h3 className="bold">Map & GPS</h3>
                                <ul>
                                    <li>Ask IA for the best commute way to reach to the destination.</li>
                                    <li>IA can provide users with the current location</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="user-scenario">
                    <h2 className="">User Scenario</h2>
                    <div className="container">
                        <div className="row">
                            <img className="col-2 left" id="user-1" src={images['User-1.svg']} alt="User-1" />
                            <div className="col-8">
                                <h3 className="bold">I want to make myself a simple brownie, can you assist me with detailed steps?</h3>
                                <p className="longer-text">Definitely! Before we get started, you should have the following ingredients: plain flour, caster sugar, eggs, chocolate powder, butter, baking powder, and salt.</p>
                                <h3 className="bold">Great! I have all the ingredients.</h3>
                                <p className="longer-text">First, You should preheat the oven to 190 celsius. Then, melt the butter or margarine in a small pan over low heat. At the same time, you can mix the caster sugar and eggs in a new bowl.</p>
                                <br />
                            </div>
                            <img className="col-2 right" src={images['VoiceAssistant.svg']} alt="Voice Assistant" />
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="row">
                            <img className="col-2 left" src={images['User-2.svg']} alt="User-2" />
                            <div className="col-8">
                                <h3 className="bold">The light bulb in the house is broken, can you guide me with fixing it?</h3>
                                <p className="longer-text">Sure! Could you tell me which light bulb you are going to fix?</p>
                                <h3 className="bold">It's the light bulb in the ceiling.</h3>
                                <p className="longer-text">Before we get started, please make sure that all the power has already been turned off. And since the ceiling is normally untouchable, you should have safe and hard extension tools and a glove to help you touch the bulb.</p>
                                <p className="longer-text">To assure you do the turn-off part, please reply to me with “I already turned off the power” after 2 mins.</p>
                                <h3 className="bold">I already turned off the power.</h3>
                                <p className="longer-text">Make sure that the light bulb is already cooled down before touching it. </p>
                                <p className="longer-text">Then you need to remove the screws with the screwdriver to take off the dome from the frame.</p>
                                <p className="longer-text">After it, you can replace your old light bulb with the new one and fix the dome back to the frame.</p>
                                <h3 className="bold">Alright! Thank you for guiding me.</h3>
                                <p className="longer-text">Don’t forget to get rid of the bulb safely! You can wrap it with old newspapers or magazines before throwing it.</p>
                                <br />
                            </div>
                            <img className="col-2 right" id="voiceAssistant-2" src={images['VoiceAssistant.svg']} alt="Voice Assistant" />
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
