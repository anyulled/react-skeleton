import React from "react";
import {Grid, Row, Col, PageHeader} from "react-bootstrap";
import BootstrapTable from "../containers/DataGrid/BootstrapTableContainer";

class UsersBootstrapTable extends React.Component {
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
                        <Col sm={12} style={{height:250}}>
                            <BootstrapTable/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default UsersBootstrapTable;