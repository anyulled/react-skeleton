import React from "react";
import PageSummary from "components/DataGrid/Pagination/PageSummary";
import * as tableActions from "actions/tables/tables";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {
        pageSize: state.tables[ownProps.tableName].pageSize,
        pageNumber: state.tables[ownProps.tableName].pageNumber,
        numberOfPages: state.tables[ownProps.tableName].numberOfPages,
        numberOfElements: state.tables[ownProps.tableName].numberOfElements
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changePage: (table, page) => {
            dispatch(tableActions.userTablePagination(table, page));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageSummary);
