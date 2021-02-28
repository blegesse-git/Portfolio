import React from 'react';
import author from "../headshot.jpg"

const AboutMe = () => {
    return (
        <div id="about" className="container py-5 about">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">

                        <img src={author} className="profile-img" alt="picture of author" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="aboutMe">About Me</h1>
                    <p>
                    Hello there! My name is Bethelhem Legesse, I am originally from Addis Ababa, Ethiopia. 
                    I graduated from Texas Tech University then received a full stack web development certificate from the University of Texas at Austin.  
                    From hobby turned passion, I have successfully built web and mobile applications with Javascript, Reactjs, Nodejs and other cool libraries and frameworks. Im always striving to learn more and improve my craft. 
                    Check out my portfolio to see cool projects I’ve worked on.

                    </p>
                    

                </div>
            </div>
        </div>
    )
}

export default AboutMe
