import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import pdf from '../src/HollyHarnackResume.pdf';

class Sidebar extends React.Component {

    render() {

        return (
            <Container fluid className="sidebar d-none d-md-block">
                <Row className="p-3 pt-5">
                    <a href="#about" className="sidebar-item"><Col>About Me</Col></a>
                </Row>
                <Row className="sidebar-item p-3">
                    <a href="#proj" style={{color:"inherit"}}><Col>Projects</Col></a>
                </Row>
                <Row className="sidebar-item p-3">
                    <a href="#contact" style={{color:"inherit"}}><Col> Contact Me</Col></a>
                </Row>
                <Row className="sidebar-item p-3">
                    <a href={pdf} style={{color:"inherit"}}><Col>Resume</Col></a>
                </Row>
            </Container>
        );

    }

}

export default Sidebar;

