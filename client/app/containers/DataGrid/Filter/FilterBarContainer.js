import React from "react";
import {connect} from "react-redux";
import * as tableActions from "../../../actions/tables/tables";
import FilterBar from "../../../components/DataGrid/Filter/FilterBar";
const mapStateToProps = (state, ownProps) => {
    return {
        columns: state.tables.userTable.columns,
        filters: state.tables.userTable.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddFilter: (column) => {
            dispatch(tableActions.filterAdd(column));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterBar);