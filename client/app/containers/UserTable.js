import React, { PropTypes } from "react";
//import SortHeaderCell from '../components/SortHeaderCell';
import { connect } from "react-redux";
import * as userActions from "../actions/users/users";
import * as tableActions from "../actions/tables/tables";
import * as modalActions from "../actions/modal/modal";
import SortableTable from "../containers/SortableTable";

let columnTitles = {
		'id': 'ID',
		'name': 'Name',
		'yearOfBirth': 'Year of Birth',
		'country': 'Country',
		'username': 'Username'
	};
	
let columnWidths = {
		'id': 150,
		'name': 200,
		'yearOfBirth': 150,
		'country': 150,
		'username': 150
	};	

const mapStateToProps = (state, ownProps) => {
	return {
		data: state.users,
		columnOrder: state.tables.userTable.columnOrder,
		rowSortKey: state.tables.userTable.rowSortKey,
		rowSortDesc: state.tables.userTable.rowSortDesc,
		columnWidths,
		columnTitles
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dataLoad: () => {
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
		},
		sortRowsBy: (sortKey) => {
			dispatch(tableActions.userTableRowOrderSet(sortKey));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SortableTable);