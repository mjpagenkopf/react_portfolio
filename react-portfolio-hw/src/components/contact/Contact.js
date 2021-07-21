import './contact.scss'
import React from 'react';
// import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Dog from '../images/auggie.jpg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Contact() {
    return (
    <div
        className='bg_image'
            style={{
                backgroundImage: `url(${Dog})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                minHeight:"100vh",
                color: "#f5f5f5"
        }}
        >
      <div className="contact color-overlay text-center" id="contact">
        
        <Form>
            <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control className='email-input' type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            </Form.Text>
            </Form.Group>
        <Row>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Message</Form.Label>
            <Form.Control className='form-input' placeholder="Message" />
            </Form.Group>
        </Row>
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
      
      </div>

    </div> 
    )
}

export default Contact;