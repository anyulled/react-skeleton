import React from "react";
import DbNavigation from "./UI/DbNavigation";
import DbSidebar from "./UI/DbSidebar";
import {Grid, Row, Col, Jumbotron, Button} from "react-bootstrap";
import {Link} from "react-router";

class GenericApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <Grid>
                <Row>
                    <Col sm={4}>
                        <DbSidebar/>
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