import React from "react";
//import SortHeaderCell from '../components/SortHeaderCell';
import {connect} from "react-redux";
import * as userActions from "../../actions/users/users";
import * as tableActions from "../../actions/tables/tables";
import * as modalActions from "../../actions/modal/modal";
import FixedDataTable2 from "../../components/DataGrid/FixedDataTable2";

const mapStateToProps = (state, ownProps) => {
	return {
        data: state.users,
        columns: state.tables.userTable.columns,
        rowSortKey: state.tables.userTable.rowSortKey,
        rowSortDesc: state.tables.userTable.rowSortDesc
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
        tableColumnOrderSet: (columns) => {
            dispatch(tableActions.userTableColumnOrderSet(columns));
        },
        sortRowsBy: (sortKey) => {
            dispatch(tableActions.userTableRowOrderSet(sortKey));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FixedDataTable2);