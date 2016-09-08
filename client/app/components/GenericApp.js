import React from "react";
import Sidebar from "./UI/Sidebar";
import {Grid, Row, Col, Jumbotron, Button} from "react-bootstrap";
import {Link} from "react-router";

class GenericApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {"id": "1", "name": "Section 1", "route": "/"},
                {"id": "2", "name": "Section 2", "route": "/link2"},
                {"id": "3", "name": "Section 3", "route": "/link3"}
            ]
        };
    }

    render() {
        return (<div>
            <Grid>
                <Row>
                    <Col sm={4}>
                        <Sidebar items={this.state.items}/>
                    </Col>
                    <Col sm={8}>
                        <Jumbotron>
                            <h1>Main Content</h1>
                            <p>This is the main content</p>
                            <p><Link to="/dashboard"><Button bsStyle="primary">Learn more</Button></Link></p>
                        </Jumbotron>
                    </Col>
                </Row>
            </Grid>
        </div>);
    }
}

export default GenericApp;