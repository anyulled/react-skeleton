import React from "react";
//import SortHeaderCell from '../components/SortHeaderCell';
import {connect} from "react-redux";
import * as userActions from "../../actions/users/users";
import * as tableActions from "../../actions/tables/tables";
import * as modalActions from "../../actions/modal/modal";
import ResponsiveFixedDataTable2 from "../../components/DataGrid/ResponsiveFixedDataTable2";

const mapStateToProps = (state, ownProps) => {

	return {
		name: ownProps.tableName,
		data: state[ownProps.tableName],
		columns: (state.tables[ownProps.tableName]?state.tables[ownProps.tableName].columns:null),
		filters: (state.tables[ownProps.tableName]?state.tables[ownProps.tableName].filters:null),
		rowSortKey: (state.tables[ownProps.tableName]?state.tables[ownProps.tableName].rowSortKey:null),
		rowSortDesc: (state.tables[ownProps.tableName]?state.tables[ownProps.tableName].rowSortDesc:null),
        pageNumber: (state.tables[ownProps.tableName]?state.tables[ownProps.tableName].pageNumber:null),
        pageSize: (state.tables[ownProps.tableName]?state.tables[ownProps.tableName].pageSize:null),
        numberOfPages: (state.tables[ownProps.tableName]?state.tables[ownProps.tableName].numberOfPages:null),
        totalOfElements: (state.tables[ownProps.tableName]?state.tables[ownProps.tableName].totalOfElements:null)
	};
};

const mapDispatchToProps = (dispatch) => {
    return {
        dataLoad: (properties) => {
            dispatch(userActions.usersLoad(properties));
        },
        onRemoveClick: (id) => {
            dispatch(userActions.userRemove(id));
        },
        onEditClick: (user) => {
            dispatch(modalActions.modalEditUser(user));
        },
        tableColumnOrderSet: (table, columns) => {
            dispatch(tableActions.tableColumnOrderSet(table, columns));
        },
        sortRowsBy: (table, sortKey) => {
            dispatch(tableActions.tableRowOrderSet(table, sortKey));
        },
        changePage: (table, page) => {
            dispatch(tableActions.userTablePagination(table, page));
        },
        changePageSize: (table, pageSize) => {
            dispatch(tableActions.userTablePaginationSelectPageSize(table, pageSize));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResponsiveFixedDataTable2);