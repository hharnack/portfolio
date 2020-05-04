import React from 'react';
import './sidebar.css';

class Sidebar extends React.Component{

    render() {

        return (
            <div className="main">
                <div>
                    Home
                </div>
                <div>
                    Projects
                </div>
                <div>
                    Contact Me
                </div>
            </div>
        );

    }

}

export default Sidebar;

