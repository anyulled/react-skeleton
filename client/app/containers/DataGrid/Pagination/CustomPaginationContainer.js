import React, { PropTypes } from "react";
import CustomPagination from "../../../components/DataGrid/Pagination/CustomPagination";
import * as tableActions from "../../../actions/tables/tables";
import {connect} from "react-redux";

const mapStateToProps = (state,ownProps) => { 
    return {
    	tableName: ownProps.tableName,
        pageNumber: state.tables[ownProps.tableName].pageNumber,
        pageSize: state.tables[ownProps.tableName].pageSize,
        numberOfPages: state.tables[ownProps.tableName].numberOfPages,
        numberOfElements: state.tables[ownProps.tableName].numberOfElements,
        maxButtons: state.tables[ownProps.tableName].maxButtons
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changePage: (table, page) => {
            dispatch(tableActions.userTablePagination(table, page));
        },
        changePageSize: (table, pageSize, pageNumber, numberOfPages, numberOfElements) => {
            dispatch(tableActions.userTablePaginationSelectPageSize(table, pageSize, pageNumber, numberOfPages, numberOfElements));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomPagination);
