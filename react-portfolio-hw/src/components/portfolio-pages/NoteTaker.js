import './note-taker.scss'
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Button from 'react-bootstrap/Button';
import { ExternalLink } from 'react-external-link';


export default function NoteTaker() {
    return (
       
            <Row className="note-taker" id="note-taker">
                <Col className="note-taker-left">
                    <h1 className="text-center">Note Taker Application</h1>
                    <br />
                    <p className="text-center">The Note Taker app was created to provide the user with a simple but practical way to store notes in a running list that can be updated or deleted when necessary.</p>
                    <div className="text-center">
                        <Button variant="light" size='lg'>
                            <ExternalLink href="https://pagenkopf-note-taker.herokuapp.com/">
                                <span>Note Taker</span>
                            </ExternalLink>
                        </Button>
                    </div>   
                </Col>

                <Col className="note-taker-right text-center">
                    <span>
                        <NoteAddIcon style={{ fontSize: 300 }} />
                    </span>
                </Col>
            </Row>
          
    )
}