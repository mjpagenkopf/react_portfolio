import './team-profile-gen.scss'
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Button from 'react-bootstrap/Button';
import { ExternalLink } from 'react-external-link';


export default function TeamProfileGen() {
    return (
       
            <Row className="team-profile-gen" id="team-profile-gen">
                <Col className="team-profile-gen-left">
                    <h1 className="text-center">Team Profile Generator Application</h1>
                    <br />
                    <p className="text-center">This application allows a manager to create a simple profile page for their team and generate individual profile cards for each team member. I built this app so managers can showcase employees in a professional layout that is easy to control as each profile is created. It eliminates any concerns a manager may have about keeping the profiles consistent in style without concern for complicated code issues.</p>
                    <div className="text-center">
                        <Button variant="light" size='lg'>
                            <ExternalLink href="https://pagenkopf-note-taker.herokuapp.com/">
                                <span>Team Profile Generator</span>
                            </ExternalLink>
                        </Button>
                    </div>   
                </Col>

                <Col className="team-profile-gen-right text-center">
                    <span>
                        <ContactMailIcon style={{ fontSize: 300 }} />
                    </span>
                </Col>
            </Row>
          
    )
}