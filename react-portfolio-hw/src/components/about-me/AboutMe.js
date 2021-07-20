import './about-me.scss'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function AboutMe() {
    return (
        <div style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/glacier.jpg'})`, backgroundRepeat: 'no-repeat', width:'100%' }}>
        <Container fluid>
            
            <Row>
            
            <Col className="about-me" id="about-me">
                <img src={process.env.PUBLIC_URL + "/IMG_4903_3.jpg"} width="300" alt="profile" />
            </Col>
            <Col>
            <h1>About Me:</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae commodi nobis, ab asperiores quam officiis sapiente fugiat delectus dolores facilis minus necessitatibus libero beatae laboriosam magnam. Voluptatibus eum distinctio eos?</p>
            </Col>
            
            </Row>
            
        </Container>
        </div>
    )
}