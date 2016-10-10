import React from "react";
import {MenuItem,DropdownButton,InputGroup} from "react-bootstrap";

const OPTIONS_LIST = {
    "EQ":{
    	symbol:"=",
    	description:"= (equals to)",
    },
    "NEQ":{
    	symbol:"!=",
    	description:"!= (not equals to)",
    },
    "LIKE":{
    	symbol:"~",
    	description:"~ (similar to)",
    },
    "GT":{
    	symbol:">",
    	description:"> (greater than)",
    },
    "LT":{
    	symbol:"<",
    	description:"< (lower than)",
    }
};

const FilterOption = ({handleFilterOption,filterProps,defaultsearchOptionValue,tableName,...props}) => (
		
	<DropdownButton 
		style={{"minWidth":"39px"}}
		componentClass={InputGroup.Button} 
		id="input-dropdown-addon" 
		title={filterProps.searchOptionValue
				?
					OPTIONS_LIST[filterProps.searchOptionValue].symbol
				:
					OPTIONS_LIST[filterProps.defaultOptionValue].symbol}					
	>
		{Object.keys(OPTIONS_LIST).map((key,i)=>
			<MenuItem key={i} eventKey={{tableName,key,filterProps}} onSelect={handleFilterOption}>
				{OPTIONS_LIST[key].description}
			</MenuItem>)
		}
    </DropdownButton>        		        	
);

FilterOption.defaultProps = {
	defaultsearchOptionValue:"EQ"
};

export default FilterOption;