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
            dispatch(tableActions.userTableFilterRemove(column));
        },
        handleFilterValue: (column, value) => {
            dispatch(tableActions.userTableFilterSearch(column,value));
        },
        handleFilterOption: ({filterProps, key}) => {
        	dispatch(tableActions.userTableFilterOption(filterProps,key));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);
