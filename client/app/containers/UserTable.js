import React, { PropTypes } from "react";
import { Table, Column, Cell } from "fixed-data-table-2";
import { Glyphicon } from "react-bootstrap";
import TextCell from '../components/TextCell';
//import SortHeaderCell from '../components/SortHeaderCell';
import { connect } from "react-redux";
import * as userActions from "../actions/users/users";
import "fixed-data-table-2/dist/fixed-data-table-base.css";
import "fixed-data-table-2/dist/fixed-data-table-style.css";
import "fixed-data-table-2/dist/fixed-data-table.css";
import * as tableActions from "../actions/tables/tables";
import * as modalActions from "../actions/modal/modal";

var columnTitles = {
		'id': 'ID',
		'name': 'Name',
		'yearOfBirth': 'Year of Birth',
		'country': 'Country',
		'username': 'Username'
	};
var columnWidths = {
		'id': 150,
		'name': 200,
		'yearOfBirth': 150,
		'country': 150,
		'username': 150
	};

class UserTable extends React.Component {
	constructor(props) {
		super(props);
		
		this.onColumnReorderEndCallback = this.onColumnReorderEndCallback.bind(this);
	}
	componentWillMount(){
		this.props.usersLoad();
	}
	onColumnReorderEndCallback(event) {
		console.log(event);
		var columnOrder = this.props.columnOrder.filter((columnKey) => {
			return columnKey !== event.reorderColumn;
		});
		if (event.columnAfter) {
			var index = columnOrder.indexOf(event.columnAfter);
			columnOrder.splice(index, 0, event.reorderColumn);
		} else {
			columnOrder.push(event.reorderColumn);
		}
		this.props.userTableColumnOrderSet(columnOrder);
	}
	render() {
		let { users, onEditClick, onRemoveClick, edit, columnOrder } = this.props;
		let width = Object.keys(columnWidths).reduce((prevCol, key) => {
			return prevCol + columnWidths[key];
		}, 0);
		let rowHeight = 30;
		return(
				<Table
					height={users.length * rowHeight}
					rowsCount={users.length}
					onColumnReorderEndCallback={this.onColumnReorderEndCallback}
					isColumnReordering={false}
					width={width + (edit ? 100 : 0)}
					rowHeight={rowHeight}
					headerHeight={rowHeight}
					{...this.props}
				>
					{columnOrder.map(function (columnKey, i) {
						return <Column
							allowCellsRecycling={true}
							columnKey={columnKey}
							key={i}
							isReorderable={true}
							header={<Cell>{columnTitles[columnKey]}</Cell>}
							cell={<TextCell data={users} col={columnKey} />}
							fixed={i === 0}
							width={columnWidths[columnKey]}
						/>;
					})}
					{ edit ? <Column isReorderable={false}  width={100} header="Actions"
						cell={({rowIndex, ...props}) => (
								<Cell>
									<div style={{cursor: "pointer", display:"inline"}} onClick={() => { onEditClick(users[rowIndex])}}><Glyphicon glyph="pencil" /></div>
								</Cell>
							)}  
					/> : null }
				</Table>
		);
	}
	
}

UserTable.defaultProps= {
	edit: false
};

UserTable.propTypes = {
	users: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		yearOfBirth: PropTypes.string.isRequired,
		country: PropTypes.string.isRequired,
		username: PropTypes.string.isRequired
	}).isRequired).isRequired,
	usersLoad: PropTypes.func.isRequired,
	onRemoveClick: PropTypes.func.isRequired,
	onEditClick: PropTypes.func.isRequired,
	edit: PropTypes.bool.isRequired,
	columnOrder: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

const mapStateToProps = (state) => {
	return {
		users: state.users,
		columnOrder: state.tables.userTable.columnOrder
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		usersLoad: () => {
			dispatch(userActions.usersLoad());
		},
		onRemoveClick: (id) => {
			dispatch(userActions.userRemove(id));
		},
		onEditClick: (user) => {
			dispatch(modalActions.modalEditUser(user));
		},
		userTableColumnOrderSet: (columnOrder) => {
			dispatch(tableActions.userTableColumnOrderSet(columnOrder));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserTable);