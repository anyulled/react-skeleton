import React, {PropTypes} from "react";
import {connect} from "react-redux";
import * as tableActions from "../../../actions/tables/tables";
import TextFilter from "../../../components/DataGrid/Filter/TextFilter";

const mapDispatchToProps = (dispatch) => {
    return {
    	handleFilter: (column, value) => {
    		dispatch(tableActions.filter(column,value));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(TextFilter);