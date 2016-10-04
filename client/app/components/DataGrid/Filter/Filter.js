import React from "react";
import TextFilter from "./TextFilter";
import {ControlLabel} from "react-bootstrap";

const FILTER_COMPONENTS = {
    "integer": TextFilter,
    "string": TextFilter
};

class Filter extends React.Component {	
	
	render() {
		let {filterType,...props}=this.props;
		if (!filterType) {
	        return null;
	    }
		let {filterProps}=this.props;
		const SpecificFilter = FILTER_COMPONENTS[filterType];
		return(
				<span style={{"maxWidth":"100px","display":"block"}}>
			    <ControlLabel>{filterProps.title}</ControlLabel>
			    <SpecificFilter {...props}/>
			</span>
		)
	}
};

export default Filter;