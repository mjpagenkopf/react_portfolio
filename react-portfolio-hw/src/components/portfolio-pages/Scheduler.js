import './scheduler.scss'
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Button from 'react-bootstrap/Button';
import { ExternalLink } from 'react-external-link';


export default function Scheduler() {
    return (
        
            <Row className="scheduler" id="scheduler">
                <Col className="scheduler-left text-center">
                        <span>
                            <CalendarTodayIcon style={{ fontSize: 300 }} />
                        </span>
                </Col>

                <Col className="scheduler-right">
                    <h1 className="text-center">Daily Work Scheduler Application</h1>
                    <p className="text-center">A simple but useful tool for keeping track of your busy work schedule.</p>
                    <div className="text-center">
                        <Button variant="light" size='lg'>
                            <ExternalLink href="https://mjpagenkopf.github.io/work_day_scheduler/">
                                <span>Daily Work Scheduler</span>
                            </ExternalLink>
                        </Button>
                    </div>
                </Col>
                
            </Row>
        
    )
}