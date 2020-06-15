import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import pro1 from '../images/proj1.JPG';

class Project extends React.Component {

    render() {

        return (
            <div className="mt-4 d-flex justify-content-center">
                <div className="page">
                    <div className="title">My Projects</div>
                    <hr style={{ borderColor: '#556246' }} />
                    <Row>
                        <Col md="6" sm="12" xs="12">
                            <Card className="text-center">
                                <Card.Img top width="100%" src={pro1} />
                                <Card.Body>
                                    <Card.Title>K9 Fun Family</Card.Title>
                                    <Card.Text>This is a web applicaion I completed on a team for my capstone project.</Card.Text>
                                    <Card.Link href="https://github.com/hharnack/loginPrototypeV0.0">See thes Code</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="6" sm="12" xs="12">
                            <Card>
                                <Card.Img top width="100%" src="/assets/318x180.svg" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Subtitle>Card subtitle</Card.Subtitle>
                                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the cards content.</Card.Text>
                                    <Button>Button</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6" sm="12" xs="12">
                            <Card>
                                <Card.Img top width="100%" src="/assets/318x180.svg" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Subtitle>Card subtitle</Card.Subtitle>
                                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the cards content.</Card.Text>
                                    <Button>Button</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="6" sm="12" xs="12">
                            <Card>
                                <Card.Img top width="50%" src="/assets/318x180.svg" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Subtitle>Card subtitle</Card.Subtitle>
                                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the cards content.</Card.Text>
                                    <Button>Button</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="4" sm="12" xs="12">
                            <Card>
                                <Card.Img top width="100%" src="/assets/318x180.svg" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Subtitle>Card subtitle</Card.Subtitle>
                                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the cards content.</Card.Text>
                                    <Button>Button</Button>
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