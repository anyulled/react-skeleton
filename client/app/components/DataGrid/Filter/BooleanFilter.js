import React from "react";
import {FormGroup,Radio} from "react-bootstrap";
import "../../../stylesheets/components/DataGrid/Filter/BooleanFilter.css";

const BooleanFilter = ({tableName, filterProps,...props}) => {
    let handleChange=function(event) {
        props.handleFilterValue(tableName, filterProps, event.target.value);
    }
    return(
    	<div className="react-boolean-datagrid-filter">
    		<input type="radio" value="true" checked={filterProps.searchValue === "true"} onChange={handleChange}/> Yes
    		&nbsp; 
    		<input type="radio" value="false" checked={filterProps.searchValue === "false"} onChange={handleChange}/> No 				
		</div>
	);
}

export default BooleanFilter;