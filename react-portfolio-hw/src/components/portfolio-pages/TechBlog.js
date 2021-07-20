import './tech-blog.scss'
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import WebIcon from '@material-ui/icons/Web';
import Button from 'react-bootstrap/Button';
import { ExternalLink } from 'react-external-link';


export default function TechBlog() {
    return (
       
            <Row className="tech-blog" id="tech-blog">
                <Col className="tech-blog-left">
                    <h1 className="text-center">Tech Blog Website</h1>
                    <br />
                    <p className="text-center">This is a CMS Tech Blog website that allows for developers to create a user account and easily begin publishing blog posts on all-things-tech related. This site also allows for users to comment on other blog posts and share their thoughts. It was created using Handlebars as the templating language with Sequelize as the ORM and express-session for authentication.</p>
                    <div className="text-center">
                        <Button variant="light" size='lg'>
                            <ExternalLink href="https://pagenkopf-tech-blog.herokuapp.com/">
                                <span>Tech Blog</span>
                            </ExternalLink>
                        </Button>
                    </div>   
                </Col>

                <Col className="tech-blog-right text-center">
                    <span>
                        <WebIcon style={{ fontSize: 300 }} />
                    </span>
                </Col>
            </Row>
          
    )
}