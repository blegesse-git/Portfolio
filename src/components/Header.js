import React from 'react';
import Typed from 'react-typed';


const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1 className="myName">Bethlehem Legesse</h1>
                <p></p>
                <Typed 
                    className="typed-text"
                    strings={["Full Stack Javascript Developer"]}
                    // strings={["MERN Stack", "MySQL","Sequelize", "Mongoose", "Bootsrap", "React", "JSX", "jQuery", "HTML5", "CSS3", "Progressive Web Application","Object Oriented Programming","Responsive Web Design", "Heroku", "Git"]}
                    typeSpeed={60}
                    // backSpeed={60}
                    // loop
                />
                
                
            </div>
        </div>
    )
}

export default Header
