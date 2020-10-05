import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import proj1 from '../images/proj1.JPG';
import proj2 from '../images/proj2.JPG';
import proj3 from '../images/proj3.JPG';
import proj4 from '../images/proj4.JPG';

class Project extends React.Component {

    render() {

        return (
            <div className="mt-4 d-flex justify-content-center">
                <div className="page">
                    <div className="title">My Projects</div>
                    <hr style={{ borderColor: '#556246' }} />
                    <Row>
                        <Col md="6" sm="12" xs="12">
                            <Card className="text-center card-item">
                                <Card.Img top width="100%" src={proj1} />
                                <Card.Body>
                                    <Card.Title>K9 Fun Family</Card.Title>
                                    <Card.Text>This is a web application I completed on a team for my capstone project. This web application was created for a client who needed to manage her dog sitting business. 
                                    The application includes a calander for appointments, testimonials, photo gallery, user profiles and an admin tool. This application is written in JavaScript and react for the 
                                    front-end and Java for the back-end. Communication between the back-end and front-end is achieved with a RESTful API.</Card.Text>
                                    <Card.Link href="https://github.com/hharnack/loginPrototypeV0.0">See the Code</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="6" sm="12" xs="12">
                            <Card className="text-center card-item">
                                <Card.Img top width="100%" src={proj2} />
                                <Card.Body>
                                    <Card.Title>Tic Tac Toe Game</Card.Title>
                                    <Card.Text>Includes a GUI written in Java for the client and server allowing multiple games of Tic Tac Toe and chats to run concurrently using Transmission Control Protocol. 
                                    Each users enter in the ip address to connect to and a username. The server runs checking for players to pair together. Once two players 
                                    are connected they can play a game of Tic Tac Toe and chat. This program uses threads, sockets, observer pattern and synchronization.</Card.Text>
                                    <Card.Link href="https://github.com/hharnack/TicTacToeGame">See the Code</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6" sm="12" xs="12">
                            <Card className="text-center card-item">
                                <Card.Img top width="100%" src={proj3} />
                                <Card.Body>
                                    <Card.Title>Client/Property Management System</Card.Title>
                                    <Card.Text>This is a GUI written in Java that manages clients and properties. It uses awt and connects to a SQL database using JDBC.</Card.Text>
                                    <Card.Link href="https://github.com/hharnack/Management-Graphical-User-Interface">See the Code</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="6" sm="12" xs="12">
                            <Card className="text-center card-item">
                                <Card.Img top width="50%" src={proj4} />
                                <Card.Body>
                                    <Card.Title>Car Rental</Card.Title>
                                    <Card.Text>Front-end of a website created in JavaScript, HTML and CSS for a car rental service. A user can search through a list of customers then auto fill fields and order a rental for that customer. A receipt is shown afterwards. 
                                    Data is stored in a JavaScript file of JSON objects.
                                    </Card.Text>
                                    <Card.Link href="https://github.com/hharnack/Car-Rental">See the Code</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );

    }

}

export default Project;