import React from "react";
import Navigation from "./UI/Navigation";
import Sidebar from "./UI/Sidebar";
import {Grid, Row, Col, Jumbotron, Button} from "react-bootstrap";
import {Link} from "react-router";

class GenericApp extends React.Component {
    constructor(props) {
        super(props);
		this.state = {
			items: [
				{"id": "1", "name": "Client", "route": "/"},
				{"id": "2", "name": "Obligor", "route": "/link2"},
				{"id": "3", "name": "Details", "route": "/link3"}
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