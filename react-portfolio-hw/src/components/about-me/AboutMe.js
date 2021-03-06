import './about-me.scss'
import React from 'react';
import Cambodia from '../images/cambodia.jpg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



export default function AboutMe() {
    return (
        <div
            
            className='bg_image'
            style={{
                backgroundImage: 'url('+Cambodia+')',
                backgroundSize: "cover",
                height: "100vh",
                color: "#f5f5f5"
            }}
            >
        
        <Row className="about-me color-overlay text-center" id="about-me">
            
            <Col className="about-me-left text-center">
                
            </Col>
            <Col className="about-me-right">
            <h1 className="text-center">About Me:</h1>
            <p>I'm an aspiring full-stack web programmer who has thrown himself into a new experience with a lot of knowledge to gain but a lot of heart to learn. Every new project is building on the last and I look forward to the road ahead. I also love my amazing dog, Auggie, and hope to keep traveling the world!</p>
            </Col>
        </Row>
        </div>
    )
}


// style={{ 
//     backgroundImage: `url(${process.env.PUBLIC_URL + '/DSCF2202.jpg'})`, width:'100%' }}>