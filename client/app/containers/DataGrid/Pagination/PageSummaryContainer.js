import React, { PropTypes } from "react";
import PageSummary from "../../../components/DataGrid/Pagination/PageSummary";
import * as tableActions from "../../../actions/tables/tables";

import {connect} from "react-redux";

const mapStateToProps = (state,ownProps) => { 
    return {
        pageNumber: state.tables[ownProps.tableName].pageNumber,
        numberOfPages: state.tables[ownProps.tableName].numberOfPages,
        pageSize: state.tables[ownProps.tableName].pageSize,
        totalOfElements: state.tables[ownProps.tableName].totalOfElements
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
