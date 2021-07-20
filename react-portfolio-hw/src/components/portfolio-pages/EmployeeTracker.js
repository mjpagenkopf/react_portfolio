import './employee-tracker.scss'
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import GroupIcon from '@material-ui/icons/Group';
import Button from 'react-bootstrap/Button';
import { ExternalLink } from 'react-external-link';


export default function EmployeeTracker() {
    return (
        
            <Row className="employee-tracker" id="employee-tracker">
                <Col className="employee-tracker-left text-center">
                        <span>
                            <GroupIcon style={{ fontSize: 300 }} />
                        </span>
                </Col>

                <Col className="employee-tracker-right">
                    <h1 className="text-center">Employee Tracker</h1>
                    <p className="text-center">This is a back-end e-commerce application that stores an assortment of products and details contained in numerous tables within a single database. These products are associated with their details using through models.</p>
                    <div className="text-center">
                        <Button variant="light" size='lg'>
                            <ExternalLink href="https://github.com/mjpagenkopf/ecommerce_back_end">
                                <span>Employee Tracker</span>
                            </ExternalLink>
                        </Button>
                    </div>
                </Col>

                


            </Row>
        
    )
}