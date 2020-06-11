import React from 'react';
import Sidebar from './sidebar';
import Navbar from './Navbar';
import NavbarHam from './NavbarHam';
import Footer from './footer';
import Home from './pages/home';
import Contact from './pages/contact';
import Projects from './pages/projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor'

export default class App extends React.Component {

  render() {
    return (
      <div style={{backgroundColor: '#F1F2EB', height: '100%' }}>
        <div className="pl-0 pr-0 visible-xs visible-sm d-md-none sticky-top">
          <NavbarHam />
        </div>
        <div className="pl-0 pr-0 d-none d-md-block sticky-top">
          <Navbar />
        </div>
        <Container>
          <Row>
            {/* <Col md="1" className="pl-0 pr-0 d-none d-md-block">
              <Sidebar />
            </Col> */}
            <Col className="scroll">
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
      </div>
    );
  }
}
