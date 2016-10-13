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
        numberOfPages: (state.tables[ownProps.tableName]?state.tables[ownProps.tableName].numberOfPages:null)
	};
};

const mapDispatchToProps = (dispatch) => {
    return {
        dataLoad: (filters) => {
            dispatch(userActions.usersLoad(filters));
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
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResponsiveFixedDataTable2);