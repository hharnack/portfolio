import React from 'react';
import pdf from '../src/HollyHarnackResume.pdf';

class Navbar extends React.Component {

    render() {

        return (
            <nav className="navbar d-flex justify-content-center">

                <nav className="navbar navbar-expand-lg">
                    <div id="navbarNavAltMarkup ">
                        <div className="navbar-nav container ">
                            <a className="nav-item nav-link" href="#about">About Me</a>
                            <a className="nav-item nav-link" href="#proj">Projects</a>
                            <a className="nav-item nav-link" href="#contact">Contact Me</a>
                            {' '}<div style={{color:"#F1F2EB"}}>|</div> {' '} 
                            <a className="nav-item nav-link" href={pdf}>Resume</a>
                            <a className="nav-item nav-link" href="https://github.com/hharnack/">Github</a>
                            <a className="nav-item nav-link" href="https://www.linkedin.com/in/hollyharnack/">LinkedIn</a>
                        </div>
                    </div>
                </nav>

            </nav>
        );

    }

}

export default Navbar;
