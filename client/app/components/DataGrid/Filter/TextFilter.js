import React from "react";
import {FormControl} from "react-bootstrap";


class TextFilter extends React.Component {
	render() {
		let {handleFilterValue,filterProps,...props}=this.props;
		return(
			<FormControl style={{"height":"100%","width":"100px"}} type="text" className="u-full-width" onKeyUp={(event) => {handleFilterValue(filterProps,event.target.value)}} {...props}/>	        
		)
	}
};

export default TextFilter;