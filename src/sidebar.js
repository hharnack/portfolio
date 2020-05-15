import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import pdf from '../src/HollyHarnackResume.pdf';

class Sidebar extends React.Component {

    render() {

        return (
                <div className="sidebar">
                    <div style={{ height: "100%" }} className="d-flex flex-column align-items-start bd-highlight">
                        <div className="mb-auto pt-4 d-flex flex-column">
                            <a href="#about" className="p-2 bd-highlight sidebar-item">About Me</a>
                            <a href="#proj" className="p-2 bd-highlight sidebar-item">Projects</a>
                            <a href="#contact" className="p-2 bd-highlight sidebar-item">Contact Me</a>
                        </div>
                        <div className="p-2 bd-highlight"><a href={pdf} className="sidebar-item">Resume</a></div>
                        <div className="p-2 bd-highlight"><a href="https://github.com/hharnack/" className="sidebar-item">Github</a></div>
                        <div className="p-2 bd-highlight"><a href="https://www.linkedin.com/in/hollyharnack/" className="sidebar-item">LinkedIn</a></div>
                    </div>
                </div>
        );

    }

}

export default Sidebar;

