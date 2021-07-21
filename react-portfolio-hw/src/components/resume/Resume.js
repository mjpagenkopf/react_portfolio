import './resume.scss'
import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import ResumeShot from '../images/resume.png';

export default function Resume() {
    return (
    <div
        className='bg_image'
            style={{
                backgroundImage: `url(${ResumeShot})`,
                backgroundSize: "cover",
                height: "100vh",
                color: "#f5f5f5"
            }}
            >
    </div>
            
        
    )
}


