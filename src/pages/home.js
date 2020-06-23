import React from 'react';
import { Row, Col } from 'reactstrap';
import profile from '../images/me.jpg';

class Home extends React.Component {

    render() {

        return (
            <div className="d-flex justify-content-center">
                <div className="page">
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <div>
                                        <div className="main-title">
                                            Holly Harnack 
                                        </div>
                                        <div className="sub-title">
                                           Software Developer 
                                        </div>
                                        <div className="intro-content pt-2">
                                            <div>Email: <a style={{color: '#8baa4d'}} href="mailto:harnackholly@gmail.com">harnackholly@gmail.com</a></div>
                                            <div>Phone: (587)590-9700</div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="d-flex justify-content-center mt-3">
                                        <img className="img-fluid profile" src={profile} />
                                    </div>
                                </Col>
                            </Row>
                            <div className="title">About Me</div>
                            <hr style={{ borderColor: '#556246' }} />
                            <div className="content">
                                <b style={{ color: '#556246' }}>Hello</b>, my name is Holly Harnack and I have recently graduated from the Southern Alberta Institute of Technology with an Information Technology - Software Development diploma.
                    What lead me to the software development field was my passion for problem solving and creativity. I feel like this is the perfect field for me
                    as I love learning new things and I am able to create unique projects throughout the learning process.
                    <br /><br />
                    I have a dedicated and methodical approach to schooling and work
                    which is reflected through my GPA of 3.99 and scholarships I have been granted throughout my schooling. I am looking forward to utilizing my skills in the future and contributing to team projects as well as personal projects.
                    <br /><br />
                                <Row>
                                    <Col md="6" sm="12" xs="12">
                                        <div className="subtitle">Some of my technical skills:</div>
                                        <br />
                                        <ul>
                                            <li><span>Java</span></li>
                                            <li><span>HTML</span></li>
                                            <li><span>CSS</span></li>
                                            <li><span>JavaScript</span></li>
                                            <li><span>PL/SQL</span></li>
                                            <li><span>SQL</span></li>
                                            <li><span>React</span></li>
                                        </ul>
                                    </Col>
                                    <Col md="6" sm="12" xs="12">
                                        <div className="subtitle">Some of my soft skills:</div>
                                        <br />
                                        <ul>
                                            <li><span>Time Management</span></li>
                                            <li><span>Teamwork</span></li>
                                            <li><span>Detail-Oriented</span></li>
                                            <li><span>Respect</span></li>
                                            <li><span>Patience</span></li>
                                            <li><span>Problem Solving</span></li>
                                            <li><span>Creativity</span></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        {/* <Col className="d-flex justify-content-center profile"><img className="img-fluid" src={profile} /></Col> */}
                    </Row>
                </div>
            </div>
        );

    }

}

export default Home;