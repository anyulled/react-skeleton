import React from "react";
import {connect} from "react-redux";
import * as tableActions from "../../../actions/tables/tables";
import FilterBar from "../../../components/DataGrid/Filter/FilterBar";
const mapStateToProps = (state, ownProps) => {
    return {
    	columns: (state.tables[ownProps.tableName]?state.tables[ownProps.tableName].columns:null),
		filters: (state.tables[ownProps.tableName]?state.tables[ownProps.tableName].filters:null)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    	dataLoad: (tableName) => {
            dispatch(tableActions.filterLoad(tableName));
        },
        onAddFilter: (tableName,filter) => {
            dispatch(tableActions.filterAdd(tableName,filter));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterBar);