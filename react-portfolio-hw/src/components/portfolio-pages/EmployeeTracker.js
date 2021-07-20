import './employee-tracker.scss'
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function EmployeeTracker() {
    return (
        
            <Row className="employee-tracker" id="employee-tracker">
                    <Col>
                    <h1>Ecommerce Back End Application</h1>
                    <p>This is a back-end e-commerce application that stores an assortment of products and details contained in numerous tables within a single database. These products are associated with their details using through models.</p>
                    </Col>
                    <Col>2 of 2</Col>
            </Row>
        
    )
}