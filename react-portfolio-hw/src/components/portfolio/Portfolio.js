import './portfolio.scss'
import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import Ecommerce from '../portfolio-pages/Ecommerce';
import EmployeeTracker from '../portfolio-pages/EmployeeTracker';
import NoteTaker from '../portfolio-pages/NoteTaker';
import Scheduler from '../portfolio-pages/Scheduler';
import TechBlog from '../portfolio-pages/TechBlog';
import WeatherApp from '../portfolio-pages/WeatherApp';
import WorkoutTracker from '../portfolio-pages/WorkoutTracker';



export default function Portfolio() {
    return (
        <div className="portfolio grid-container" id="portfolio">
            <div className="sections">
                <Ecommerce />
                <EmployeeTracker />
                {/* <NoteTaker />
                <Scheduler />
                <TechBlog />
                <WeatherApp />
                <WorkoutTracker /> */}
            </div>
        </div>
    )
}

//       <div className="sections">
//         <AboutMe />
//         <Portfolio />
//         <Contact />
//       </div>