import './about-me.scss'
import React from 'react';
// import { Container } from 'react-bootstrap';
import Cambodia from '../images/cambodia.jpg';
// import Profile from '../images/profile.jpg'
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
                {/* <img src={process.env.PUBLIC_URL + "/IMG_4903_3.jpg"} width="300" alt="profile" /> */}
            </Col>
            <Col className="about-me-right">
            <h1 className="text-center">About Me:</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae commodi nobis, ab asperiores quam officiis sapiente fugiat delectus dolores facilis minus necessitatibus libero beatae laboriosam magnam. Voluptatibus eum distinctio eos?</p>
            </Col>
        </Row>
        </div>
    )
}


// style={{ 
//     backgroundImage: `url(${process.env.PUBLIC_URL + '/DSCF2202.jpg'})`, width:'100%' }}>