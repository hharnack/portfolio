import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import pdf from '../src/HollyHarnackResume.pdf';

class Sidebar extends React.Component {

    render() {

        return (
            <Container fluid className="sidebar d-none d-md-block">
                <Row>
                    <Col>
                        <Row className="p-3 pt-5">
                            <Col><a href="#about" className="sidebar-item">About Me</a></Col>
                        </Row>
                        <Row className="sidebar-item p-3">
                            <Col><a href="#proj" className="sidebar-item">Projects</a></Col>
                        </Row>
                        <Row className="sidebar-item p-3">
                            <Col> <a href="#contact" className="sidebar-item">Contact Me</a></Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="end">
                    <Col className="align-self-end">
                        <Row className="sidebar-item p-3">
                            <Col><a href={pdf} className="sidebar-item">Resume</a></Col>
                        </Row>
                        <Row className="sidebar-item p-3">
                            <Col><a href="https://github.com/hharnack/" className="sidebar-item">Github</a></Col>
                        </Row>
                        <Row className="sidebar-item p-3">
                            <Col><a href="https://www.linkedin.com/in/hollyharnack/" className="sidebar-item">LinkedIn</a></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );

    }

}

export default Sidebar;

