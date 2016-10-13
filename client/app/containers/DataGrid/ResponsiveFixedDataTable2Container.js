import React from "react";
//import SortHeaderCell from '../components/SortHeaderCell';
import {connect} from "react-redux";
import * as userActions from "../../actions/users/users";
import * as tableActions from "../../actions/tables/tables";
import * as modalActions from "../../actions/modal/modal";
import ResponsiveFixedDataTable2 from "../../components/DataGrid/ResponsiveFixedDataTable2";

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.users,
        columns: state.tables.userTable.columns,
        filters: state.tables.userTable.filters,
        rowSortKey: state.tables.userTable.rowSortKey,
        rowSortDesc: state.tables.userTable.rowSortDesc,
        pageNumber: state.tables.userTable.pageNumber,
        numberOfPages: state.tables.userTable.numberOfPages
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
        tableColumnOrderSet: (columns) => {
            dispatch(tableActions.userTableColumnOrderSet(columns));
        },
        sortRowsBy: (sortKey) => {
            dispatch(tableActions.userTableRowOrderSet(sortKey));
        },
        changePage: (page) => {
            dispatch(tableActions.userTablePagination(page));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResponsiveFixedDataTable2);