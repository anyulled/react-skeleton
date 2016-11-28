import React from "react";
import InputElement from "react-input-mask";

const NumberFilter = ({handleFilterValue,filterProps,tableName,...props}) => (
	<InputElement style={{"height":"100%","width":"100px"}} className='form-control' mask='99999999999' maskChar={null} onKeyUp={(event) => {handleFilterValue(tableName,filterProps,event.target.value);}} {...props}/>	        
);

export default NumberFilter;