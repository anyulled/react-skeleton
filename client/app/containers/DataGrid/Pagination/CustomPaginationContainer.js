import React, { PropTypes } from "react";
import CustomPagination from "../../../components/DataGrid/Pagination/CustomPagination";
import * as tableActions from "../../../actions/tables/tables";
import {connect} from "react-redux";

const mapStateToProps = (state,ownProps) => { 
    return {
    	tableName: ownProps.tableName,
        pageNumber: state.tables[ownProps.tableName].pageNumber,
        numberOfPages: state.tables[ownProps.tableName].numberOfPages,
        maxButtons: state.tables[ownProps.tableName].maxButtons,
        pageSize: state.tables[ownProps.tableName].pageSize,
        totalOfElements: state.tables[ownProps.tableName].totalOfElements
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
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
)(CustomPagination);
