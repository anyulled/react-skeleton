import React from "react";
import AddUser from "../containers/AddUser";
import BootstrapTableContainer from "../containers/DataGrid/BootstrapTableContainer";
import RootModal from "../containers/RootModal";
import {Grid, Row, Col} from "react-bootstrap";

const UserFormPage = () => {
    return (
    <div>
	    <Grid fluid>
	        <Row>
	            <Col xs={12} md={8}>
	                <AddUser/>
	            </Col>
	            <Col xs={12} md={10}>
	                <h4>This is for display purposes only. Any changes on the user list will be undone upon
	                    re-rendering.</h4>
	                <BootstrapTableContainer edit={true} />
	            </Col>
	        </Row>
	    </Grid>
	    <RootModal/>
	</div>
    );
};

export default UserFormPage;