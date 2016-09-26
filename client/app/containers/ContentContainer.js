import React, { PropTypes } from "react";
import { connect } from "react-redux";
import * as contentActions from "../actions/content/content";
import Content from "../components/Content";
    
const mapStateToProps = (state, ownProps) => {
	return {
		headerList:state.contentHeaders,
        content: state.contents
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    	contentHeadersLoad: (id) => {
    		dispatch(contentActions.contentHeadersLoad());
        },
        contentLoad: (id) => {
            dispatch(contentActions.contentLoad(id));
        },
        unmount: () => {
            dispatch(contentActions.unmount());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Content);