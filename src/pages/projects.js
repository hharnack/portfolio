import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

class Project extends React.Component {

    render() {

        return (
            <div className="d-flex justify-content-center">
                <div className="page">
                    <div className="title">My Projects</div>
                    <hr style={{ borderColor: '#556246' }} />
                    // <Card>
                    //     <Card.Img top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    //     <Card.Body>
                    //         <Card.Title>Card title</Card.Title>
                    //         <Card.Subtitle>Card subtitle</Card.Subtitle>
                    //         <Card.Text>Some quick example text to build on the card title and make up the bulk of the cards content.</Card.Text>
                    //         <Button>Button</Button>
                    //     </Card.Body>
                    // </Card>
                </div>
            </div>
        );

    }

}

export default Project;