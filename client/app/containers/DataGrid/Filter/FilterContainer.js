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
        handleFilterRemove: (tableName,filter) => {
            dispatch(tableActions.filterRemove(tableName,filter));
        },
        handleFilterValue: (tableName,filter, value) => {
            dispatch(tableActions.filterSearchValue(tableName,filter,value));
        },
        handleFilterOption: ({tableName,filterProps, key}) => {
        	dispatch(tableActions.filterSearchOption(tableName,filterProps,key));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);
