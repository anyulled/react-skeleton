import React from "react";
import AddUser from "../containers/AddUser";
import UserTable from "../containers/UserTable";
import {Grid, Row, Col} from "react-bootstrap";

const UserFormPage = () => {
    return (<Grid>
        <Row>
            <Col xs={12} md={8}>
                <AddUser/>
            </Col>
            <Col xs={12} md={10}>
                <h3>This is for display purposes only. Any changes on the user list will be undone upon
                    re-rendering.</h3>
                <UserTable edit={true}/>
            </Col>
        </Row>
    </Grid>);
};

export default UserFormPage;