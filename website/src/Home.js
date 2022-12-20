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

                <div className="content-header" style={{ backgroundImage: `url(${images['HomePageBG.png']})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <h3 className="project-name">Hello, I'm Ami</h3>
                    <h3 className="project-bio">Agent for Multiplepurpose Intelligence</h3>
                    <img className="ami-logo" src={images['Ami-Logo.png']} alt="UserPersona-1" />
                </div>

                <div className="intro">
                    <h2 className="intro-que">What is Ami?</h2>
                    <h2 className="intro-bio">AMI stands for 'Agent for Multipurpose Intelligence'. In French, it also means 'friend'. And she is friendly! AMI is designed to help you fulfill your tasks. She takes input through a voice-based interface in an app. She can work with natural language input, process user requests dealing with scheduling, searching, and planning.</h2>
                    <img className="ami-logo" src={images['Phone.png']} alt="UserPersona-1" />

                </div>

                <div className="intro">
                    <h2 className="intro-que">Ami is here to help everyone</h2>
                    <h2 className="intro-bio">AMI provides help through the voice interface channel with the user. Once the user tells AMI what they want to do, AMI can provide corresponding feedback after extracting the key information from the communication. In environments where the visual interface is afforded, AMI could also help people in terms of providing some visual information, such as pictures and videos to give users guideline.</h2>
                </div>

                <div className="user-scenario">
                    <div className="row">
                        <img className="col-4 left" id="user-1" src={images['User-PlantLover.png']} alt="User-1" />
                        <div className="col-6">
                            <h4> As a plant lover ... </h4>
                            <p className="">AMI please give me some advice on keeping my flowers alive and healthy </p>
                            <br />
                        </div>
                    </div>

                    <div className="row">    
                        <div className="col-6">
                            <h4> As a vegan ... </h4>
                            <p id="user-2" >I want to ask AMI to provide find me delicious home-cook vegan recipes</p>
                            <br />
                        </div>
                        <img className="col-4 left" id="user-1" src={images['User-Vegan.png']} alt="User-1" />
                    </div>

                    <div className="row">
                        <img className="col-4 left" id="user-1" src={images['User-Coffee.png']} alt="User-1" />
                        <div className="col-6">
                            <h4>As a coffee enthusiast...</h4>
                            <p id="user-3">AMI can you give me tips on cold brewing different coffee beans?</p>
                            <br />
                        </div>
                    </div>
                </div>

                <div className="ask">
                    <h4 className="">Ask Ami about anything!</h4>
                    {/* <img className="" src={images['Question.png']} alt="User-1" /> */}
                    <button className="btn">Explore Functionality</button>
                </div>



                <footer className="footer" style={{ backgroundImage: `url(${images['Footer.png']})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>Copyright © <a href="https://infoseeking.org/">InfoSeeking Lab </a>
                    2010-2022</footer>

            </div>
        </div >

    );
}



export default Home;
