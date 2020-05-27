import React from 'react';
import pdf from '../src/HollyHarnackResume.pdf';

class Navbar extends React.Component {

    render() {

        return (
            <nav className="navbar">

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav container">
                            <a className="nav-item nav-link active" href="#about">About Me <span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="#proj">Projects</a>
                            <a className="nav-item nav-link" href="#contact">Contact Me</a>
                            <a className="nav-item nav-link" href={pdf} className="sidebar-item">Resume</a>
                            <a className="nav-item nav-link" href="https://github.com/hharnack/" className="sidebar-item">Github</a>
                            <a className="nav-item nav-link" href="https://www.linkedin.com/in/hollyharnack/" className="sidebar-item">LinkedIn</a>
                        </div>
                    </div>
                </nav>

            </nav>
        );

    }

}

export default Navbar;
