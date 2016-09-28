import React from "react";
import {Grid, Row, Col, PageHeader} from "react-bootstrap";
//import UserTable from "../containers/UserTable";
import UserDataTableContainer from "../containers/UserDataTableContainer";

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <PageHeader>
                    Users
                </PageHeader>
                <Grid fluid>
                    <Row>
                        <Col sm={12}>
                            <UserDataTableContainer/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Users;