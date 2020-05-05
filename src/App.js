import React from 'react';
import Sidebar from './sidebar';
import Footer from './footer';
import Home from './pages/home';
import Contact from './pages/contact';
import Projects from './pages/projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor'

export default class App extends React.Component {

  constructor() {
    super();
  }


  render() {
    return (
      <Container fluid className="pl-0">
        <Row>
          <Col md="2" className="pr-0">
            <Sidebar />
          </Col>
          <Col md="10">
            <ScrollableAnchor id={'about'}>
              <Home />
            </ScrollableAnchor>
            <ScrollableAnchor id={'proj'}>
              <Projects />
            </ScrollableAnchor>
            <ScrollableAnchor id={'contact'}>
              <Contact />
            </ScrollableAnchor>
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}
