import React from "react";
import TextFilter from "./TextFilter";
import NumberFilter from "./NumberFilter";
import DateFilter from "./DateFilter";
import BooleanFilter from "./BooleanFilter";
import DropdownFilter from "./DropdownFilter";
import FilterOption from "./FilterOption";
import {InputGroup,Col,ControlLabel} from "react-bootstrap";

const FILTER_COMPONENTS = {
    "number": NumberFilter,
    "list": DropdownFilter,
    "text": TextFilter,
    "date": DateFilter,
    "boolean": BooleanFilter,
};


const Filter = (props) => {
    let {filterType,handleFilterRemove,handleFilterOption,handleFilterValue,...otherProps}=props;
    if (!filterType) {
        return null;
    }
    let {filterProps}=props;
    const SpecificFilter = FILTER_COMPONENTS[filterType];
    return(
		<div>
		    <ControlLabel style={{"float":"left","padding":"6px"}}>{filterProps.name}</ControlLabel>
		    <InputGroup style={{"borderSpacing":"0","width":"100px","float":"left"}}>
		    	{filterProps.allowOptions?<FilterOption {...otherProps} handleFilterOption={handleFilterOption}/>:null}
		    	<SpecificFilter {...otherProps} handleFilterValue={handleFilterValue}/>
	        	<InputGroup.Addon style={{"cursor":"pointer","width":"15px"}} onClick={() => {handleFilterRemove(props.tableName, filterProps);}}>X</InputGroup.Addon>        
	        </InputGroup>
		</div>	
	);    
}

export default Filter;