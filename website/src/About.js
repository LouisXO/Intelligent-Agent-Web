import React from "react";
import "./About.css"
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

function About(props) {


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

                <div className="content-header" style={{ backgroundImage: `url(${images['HomePageBG.png']})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <h3 className="about-name">Our Vision</h3>
                    <h3 className="about-bio">The vision of AMI as an intelligent agent service that provides proactive assistance to the customer interacting with it through an audio interface using a multi-turn conversation. The first layer of AMI will be natural language understanding (NLU), which will consist of a component for converting voice to text, followed by a component that will parse and map requests to decision-making. The decisions could be retrieving an answer or the next step to recommend, asking the customer for clarification, or providing confirmation. Unlike a typical conversational assistant, our TaskBot will be focused on solving customer’s tasks. Next, AMI will offer the next available action or piece of information from that retrieved information. Based on the customer's action or reaction, AMI will determine the next possible response to maximize the outcome for the given task and customer. In environments where the visual interface is afforded, AMI could also help people in terms of providing some visual information, such as pictures and videos which can guide them to finish their tasks.
                    </h3>
                </div>

                <div className="team">
                    <h3 className="">Our Team</h3>

                    <div className="row">
                        <img className="col-3 team-pic" src={images['Team-1.png']} />
                        <div className="col-4">
                            <h4 className="team-name">Chirag Shah</h4>
                            <h4 className="team-desc">Professor<br />Project Advisor</h4>
                        </div>
                    </div>

                    <div className="row">
                        <img className="col-3 team-pic" src={images['Team-2.png']} />
                        <div className="col-4">
                            <h4 className="team-name">Anthony Xu</h4>
                            <h4 className="team-desc">Full Stack Engineer<br />Information Extraction</h4>
                        </div>
                    </div>

                    <div className="row">
                        <img className="col-3 team-pic" src={images['Team-3.png']} />
                        <div className="col-4">
                            <h4 className="team-name">Brandon Li</h4>
                            <h4 className="team-desc">NLP Engineer<br />Back-End Developer</h4>
                        </div>
                    </div>

                    <div className="row">
                        <img className="col-3 team-pic" src={images['Team-4.png']} />
                        <div className="col-4">
                            <h4 className="team-name">Lesi Li</h4>
                            <h4 className="team-desc">UX Designer</h4>
                        </div>
                    </div>

                    <div className="row">
                        <img className="col-3 team-pic" src={images['Team-5.png']} />
                        <div className="col-4">
                            <h4 className="team-name">Louis Leng</h4>
                            <h4 className="team-desc">Information Retrieval <br />Front-End Developer</h4>
                        </div>
                    </div>

                    <div className="row">
                        <img className="col-3 team-pic" src={images['Team-6.png']} />
                        <div className="col-4">
                            <h4 className="team-name">Nara Vajaphattana</h4>
                            <h4 className="team-desc">UX Designer</h4>
                        </div>
                    </div>
                    <div className="graphics1">
                    </div>
                    <div className="graphics2">
                    </div>
                    <div className="graphics3">
                    </div>


                </div>

            </div>
        </div >

    );
}



export default About;
