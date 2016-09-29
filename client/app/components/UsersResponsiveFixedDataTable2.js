import React from "react";
import {Grid, Row, Col, PageHeader} from "react-bootstrap";
import ResponsiveFixedDataTable2Container from "../containers/DataGrid/ResponsiveFixedDataTable2Container";

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
                        <Col sm={12}>
	                        <h4>CHANGE all references on node_modules/responsive-fixed-data-table/ *.js from <b>fixed-data-table</b> to <b>fixed-data-table2</b>!!!</h4>
                            <ResponsiveFixedDataTable2Container/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default UsersBootstrapTable;