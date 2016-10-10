import React from "react";
import {Grid, Row, Col, PageHeader} from "react-bootstrap";
import ResponsiveFixedDataTable2Container from "../containers/DataGrid/ResponsiveFixedDataTable2Container";

class UsersResponsiveFixedDataTable2 extends React.Component {
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
                    <Row >
                        <Col sm={12}>
	                        <ResponsiveFixedDataTable2Container tableName={"users"}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default UsersResponsiveFixedDataTable2;