import './ecommerce.scss'
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Button from 'react-bootstrap/Button';
import { ExternalLink } from 'react-external-link';


export default function Ecommerce() {
    return (
       
            <Row className="ecommerce" id="ecommerce">
                <Col className="ecommerce-left">
                    <h1 className="text-center">Ecommerce Back End Application</h1>
                    <br />
                    <p className="text-center">This is a back-end e-commerce application that stores an assortment of products and details contained in numerous tables within a single database. These products are associated with their details using through models.</p>
                    <div className="text-center">
                        <Button variant="light" size='lg'>
                            <ExternalLink href="https://github.com/mjpagenkopf/ecommerce_back_end">
                                <span>E-Commerce Application</span>
                            </ExternalLink>
                        </Button>
                    </div>
                    
                </Col>
                    <Col className="ecommerce-right text-center">
                        <span>
                        <MonetizationOnIcon style={{ fontSize: 300 }} />
                        </span>
                    </Col>
            </Row>
          
    )
}