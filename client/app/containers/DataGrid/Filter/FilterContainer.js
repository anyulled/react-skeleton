import React, { PropTypes } from "react";
import Filter from "../../../components/DataGrid/Filter/Filter";
import * as tableActions from "../../../actions/tables/tables";
import {connect} from "react-redux";

const mapStateToProps = (state,ownProps) => {	
    return {
        selected:ownProps.filterProps.searchValue
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleFilterRemove: (column) => {
            dispatch(tableActions.filterRemove(column));
        },
        handleFilterValue: (column, value) => {
            dispatch(tableActions.filterSearch(column,value));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);
