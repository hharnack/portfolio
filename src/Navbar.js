import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class Navbar extends React.Component {

    render() {

        return (
            <nav class="navbar">

                <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><i
                        class="fas fa-bars fa-1x"></i></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                        </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"></a>
                            </li>
                    </ul>
                </div>
            </nav>
        );

    }

}

export default Navbar;

