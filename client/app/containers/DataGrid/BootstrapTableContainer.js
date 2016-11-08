import React from "react";
import {connect} from "react-redux";

import * as userActions from "../../actions/users/users";
import * as tableActions from "../../actions/tables/tables";
import * as modalActions from "../../actions/modal/modal";
import * as tooltipActions from "../../actions/tooltips/tooltips";

import BootstrapTable from "../../components/DataGrid/BootstrapTable";

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.users,
    columns: state.tables.users.columns,
    rowSortKey: state.tables.users.rowSortKey,
    rowSortDesc: state.tables.users.rowSortDesc,
    tooltip: state.editUserTooltip.tooltip,
    colorType: state.editUserTooltip.colorType
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
    sortRowsBy: (sortKey) => {
      dispatch(tableActions.userTableRowOrderSet(sortKey));
    },
    onBackLoadTooltip: () => {
      dispatch(tooltipActions.getEditUserButtonTooltip());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BootstrapTable);
