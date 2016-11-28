import React from "react";
import {MenuItem, DropdownButton} from "react-bootstrap";

const DropdownFilter = ({tableName, filterProps, ...props}) => {
    let handleSelectEvent = function (value) {
        if(value){
            props.handleFilterValue(tableName,filterProps,value);
        }
    };
    return(
    	<DropdownButton title={filterProps.searchValue?filterProps.searchValue:"Select a value"} id="bg-nested-dropdown">
			{filterProps.allowedValues?filterProps.allowedValues.map(function (filterProp, i) {
                return (
					<MenuItem key={i} eventKey={filterProp} onSelect={handleSelectEvent}>
						{filterProp}					
					</MenuItem>
				);
            }) : null
			}
	    </DropdownButton>	        	
	);
};

export default DropdownFilter;