import React from "react";
import {InputGroup,FormControl} from "react-bootstrap";


class TextFilter extends React.Component {
	render() {
		let {handleFilter,...props}=this.props;
		return(
			<InputGroup style={{"borderSpacing":"0"}}>
	        	<FormControl style={{"display":"inline","width":"100px"}} type="text" className="u-full-width" onKeyPress={handleFilter} {...props}/>
	        	<InputGroup.Addon>X</InputGroup.Addon>        
	        </InputGroup>
		)
	}
};

export default TextFilter;