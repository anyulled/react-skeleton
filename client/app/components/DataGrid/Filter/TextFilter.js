import React from "react";
import {FormControl} from "react-bootstrap";

const TextFilter = ({handleFilterValue,filterProps,tableName,...props}) => (
	<FormControl style={{"height":"100%","width":"100px"}} type="text" className="u-full-width" onKeyUp={(event) => {handleFilterValue(tableName,filterProps,event.target.value);}} {...props}/>	        
);

export default TextFilter;