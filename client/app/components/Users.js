import React from "react";
import {Link} from "react-router";
import {Table, Grid, Row, Col, PageHeader} from "react-bootstrap";
import UserTable from "../containers/UserTable";

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
		return(
			<div>
				<PageHeader>
					Users
				</PageHeader>
				<Grid fluid>
					<Row>
						<Col sm={12}>
							<UserTable/>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default Users;