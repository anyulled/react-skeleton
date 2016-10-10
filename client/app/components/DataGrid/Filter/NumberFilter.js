import React from "react";
import MaskedFormControl from 'react-bootstrap-maskedinput'

const NumberFilter = ({handleFilterValue,filterProps,tableName,componentClass,bsClass,...props}) => (
	<MaskedFormControl style={{"height":"100%","width":"100px"}} mask='11111111111111' placeholderChar=' ' type="text" onKeyUp={(event) => {handleFilterValue(tableName,filterProps,event.target.value);}} {...props}/>	        
);

export default NumberFilter;