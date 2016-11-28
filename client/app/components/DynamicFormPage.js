import React from "react";
import {Grid, Row, Col, PageHeader} from "react-bootstrap";
import FormContainer from "../containers/Form/FormContainer";

const DynamicFormPage = () => (
    <div>
        <PageHeader>
            Dynamic Form
        </PageHeader>
        <Grid fluid>
            <Row >
                <Col sm={12}>
                    <FormContainer/>
                </Col>
            </Row>
        </Grid>
    </div>
);


export default DynamicFormPage;