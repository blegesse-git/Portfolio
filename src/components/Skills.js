import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faServer, faDesktop } from '@fortawesome/free-solid-svg-icons';


function Skills() {
    return (
        <div className="skills">
            <h1 className="py-5 skillTitle">Skills</h1>
                <div className="container">
                    <div className="row">
                    <div className="col-sm">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                                    <h3>Web Design</h3>
                                    <p>I love any opportunity that lets me stretch my creative wings. </p>
                                    <p>Adobe Photoshop <br/> PWA <br/> Mobile <br/> Apps</p>
                                    
                                </div>
                            </div>
                    
                        {/* -*/}
                        <div className="col-sm">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faLaptopCode} size="2x" /></div>
                                <h3>Front-End</h3>
                                <p>"A user interface is like a joke. If you have to explain it, it's not that good" -Undefined</p>
                                <p>HTML5 <br/> CSS3 <br/> Javascript <br/> jQuery <br/> HandleBars <br/> React</p>
                                <h5>Frameworks I've worked with</h5>
                                <p>Bootstrap 4<br/> Materialize <br/> UIKit</p>
                            </div>
                        </div>
                        {/* -*/}
                        <div className="col-sm">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faServer} size="2x" /></div>
                                <h3>Back-End</h3>
                                <p>I believe a good developer is one who has the interest to understand the 'behind-the-scenes' functionality of web apps.</p>
                                <p>MySQL <br/> Node<br/> MongoDB<br/> Express<br/> Sequelize<br/> Mongoose<br/>AJAX<br/> APIs</p>
                            </div>
                        </div>
                        {/* -*/}
                        
                    </div>

                </div>
            
            
        </div>
    )
}

export default Skills
