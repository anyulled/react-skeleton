import React from "react";
import Sidebar from "./UI/Sidebar";
import {Grid, Row, Col, Jumbotron, Button} from "react-bootstrap";
import {Link} from "react-router";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {"id": "1", "name": "Home", "route": "/"},
                {"id": "2", "name": "User List", "route": "/users"},
                {"id": "3", "name": "Widgets", "route": "/widgets"}
            ]
        };
    }

    render() {
        return (<div>
            <Grid>
                <Row>
                    <Col sm={2}>
                        <Sidebar items={this.state.items}/>
                    </Col>
                    <Col sm={8}>
                        <Jumbotron>
                            <h1>Main Content</h1>
                            <p>This is the main content</p>
                            <p><Link to="/"><Button bsStyle="primary">Learn more</Button></Link></p>
                        </Jumbotron>
                    </Col>
                </Row>
            </Grid>
        </div>);
    }
}

export default Home;