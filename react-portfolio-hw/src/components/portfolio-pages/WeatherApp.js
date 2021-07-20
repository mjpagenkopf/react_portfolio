import './weather-app.scss'
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Button from 'react-bootstrap/Button';
import { ExternalLink } from 'react-external-link';


export default function WeatherApp() {
    return (
        
            <Row className="weather-app" id="weather-app">
                <Col className="weather-app-left text-center">
                        <span>
                            <WbSunnyIcon style={{ fontSize: 300 }} />
                        </span>
                </Col>

                <Col className="weather-app-right">
                    <h1 className="text-center">Weather Forecast Application</h1>
                    <p className="text-center">Use my Weather Forecast App to keep you up to date on current weather conditions in your area plus the 5 day forecast.</p>
                    <div className="text-center">
                        <Button variant="light" size='lg'>
                            <ExternalLink href="https://mjpagenkopf.github.io/weather_app/">
                                <span>Weather Forecast</span>
                            </ExternalLink>
                        </Button>
                    </div>
                </Col>

                


            </Row>
        
    )
}