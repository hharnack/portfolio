import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import pdf from '../src/HollyHarnackResume.pdf';

class Navbar extends React.Component {

    render() {

        return (
            <nav className="navbar">
                <button className="icon navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon d-flex align-items-center"><i className="material-icons">menu</i></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link navbar-item" href="#about">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-item" href="#proj">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-item" href="#contact">Contact Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-item" href={{pdf}}>Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-item" href="https://github.com/hharnack/">Github</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar-item" href="https://www.linkedin.com/in/hollyharnack/">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );

    }

}

export default Navbar;

