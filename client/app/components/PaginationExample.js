import React from "react";
import {Link} from "react-router";
import {Table, Grid, Row, Col, PageHeader, Pagination} from "react-bootstrap"
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'

class PaginationExample extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
		return(
			<div>
				<PageHeader>
					Example page header&nbsp;
					<small>Subtext for header</small>
				</PageHeader>
				<Grid fluid>
					<Row>
						<Col sm={12}>
							<h2>Table</h2>
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
							<DatePicker onChange={this.handleChange}/>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default PaginationExample;


