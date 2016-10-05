import React from "react";
import {MenuItem,DropdownButton,InputGroup} from "react-bootstrap";


class FilterModifier extends React.Component {
	render() {
		return(
			<DropdownButton style={{"minWidth":"39px"}}componentClass={InputGroup.Button} id="input-dropdown-addon" title="=">
        		<MenuItem key="=">= (equals to)</MenuItem>
	        	<MenuItem key="!=">!= (not equals to)</MenuItem>
	        	<MenuItem key="~">~ (similar to)</MenuItem>
	        	<MenuItem key=">">&gt; (greater than)</MenuItem>
	        	<MenuItem key="<">&lt; (lower than)</MenuItem>
	        </DropdownButton>        		        	
		)
	}
};

export default FilterModifier;