import React, { PropTypes } from "react";
import TextFilterContainer from "./TextFilterContainer";
import {connect} from "react-redux";
import {ControlLabel} from "react-bootstrap";

const FILTER_COMPONENTS = {
    "integer": TextFilterContainer,
    "string": TextFilterContainer
};

const FilterContainer = ({filterType, filterProps}) => {
    if (!filterType) {
        return null;
    }

    const Filter = FILTER_COMPONENTS[filterType];
    return (
		<span style={{"maxWidth":"100px","display":"block"}}>
		    <ControlLabel>{filterProps.title}</ControlLabel>
		    <Filter {...filterProps}/>
		</span>
	);
};

const mapStateToProps = (state) => {
    return {};
};

export default connect(
    mapStateToProps,
    null
)(FilterContainer);