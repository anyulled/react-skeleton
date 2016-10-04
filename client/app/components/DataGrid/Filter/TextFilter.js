import React from "react";
import {InputGroup,FormControl} from "react-bootstrap";


class TextFilter extends React.Component {
	render() {
		let {handleFilterValue,handleFilterRemove,filterProps,...props}=this.props;
		return(
			<InputGroup style={{"borderSpacing":"0"}}>
	        	<FormControl style={{"height":"100%","width":"100px"}} type="text" className="u-full-width" onKeyUp={(event) => {handleFilterValue(filterProps,event.target.value)}} {...props}/>
	        	<InputGroup.Addon onClick={() => {handleFilterRemove(filterProps)}}>X</InputGroup.Addon>        
	        </InputGroup>
		)
	}
};

export default TextFilter;