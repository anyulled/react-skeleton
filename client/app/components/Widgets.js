import React from "react";
import {Table, Grid, Row, Col, PageHeader, Pagination} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

class Widgets extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            selectedDate:moment()
        };
        this.handleDatePickerChange = this.handleDatePickerChange.bind(this);
    }
    
    handleDatePickerChange(date) {
        this.setState({
            selectedDate: date
        });
    }

    render() {
        return (
            <div>
                <PageHeader>
                    Example page header&nbsp;
                    <small>Subtext for header</small>
                </PageHeader>
                <Grid fluid>
                    <Row>
                        <Col sm={12}>
                            <h2>Paginated table</h2>
                            <Table striped bordered condensed hover>
                                <thead>
                                <tr>
                                    <th>Heading</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>content</td>
                                </tr>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td>
                                        <Pagination
                                            prev
                                            next
                                            first
                                            last
                                            ellipsis
                                            boundaryLinks
                                            items={20}
                                            maxButtons={5}
                                            activePage={1}
                                        />
                                    </td>
                                </tr>
                                </tfoot>
                            </Table>
                            <h2>DatePicker</h2>
                            <DatePicker dateFormat='DD-MM-YYYY' selected={this.state.selectedDate} onChange={this.handleDatePickerChange}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Widgets;


