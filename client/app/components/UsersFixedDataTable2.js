import React from "react";
import {Grid, Row, Col, PageHeader} from "react-bootstrap";
import FixedDataTable2Container from "../containers/DataGrid/FixedDataTable2Container";

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
                            <FixedDataTable2Container/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default UsersBootstrapTable;