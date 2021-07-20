import './portfolio.scss'
import React from 'react';
import Ecommerce from '../portfolio-pages/Ecommerce';
import EmployeeTracker from '../portfolio-pages/EmployeeTracker';
import NoteTaker from '../portfolio-pages/NoteTaker';
import Scheduler from '../portfolio-pages/Scheduler';
import TechBlog from '../portfolio-pages/TechBlog';
import WeatherApp from '../portfolio-pages/WeatherApp';
import TeamProfileGen from '../portfolio-pages/TeamProfileGen';



export default function Portfolio() {
    return (
        <div className="portfolio grid-container" id="portfolio">
            <div className="sections">
                <TechBlog />
                <Scheduler />
                <Ecommerce />
                <EmployeeTracker />
                <NoteTaker />
                <WeatherApp />
                <TeamProfileGen />
            </div>
        </div>
    )
}

//       <div className="sections">
//         <AboutMe />
//         <Portfolio />
//         <Contact />
//       </div>