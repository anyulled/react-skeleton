import React from "react";
import TextFilter from "./TextFilter";
import NumberFilter from "./NumberFilter";
import DateFilter from "./DateFilter";
import DropdownFilter from "./DropdownFilter";
import FilterOption from "./FilterOption";
import {InputGroup,Col,ControlLabel} from "react-bootstrap";

const FILTER_COMPONENTS = {
    "number":{		
        "type":NumberFilter,
        "grid":{
            "xs":6,
            "md":3	
        }
    },
    "list":{		
        "type":DropdownFilter,
        "grid":{
            "xs":6,
            "md":3	
        }
    },
    "text": {
        "type":TextFilter,
        "grid":{
            "xs":6,
            "md":3	
        }
    },
    "date": {
        "type":DateFilter,
        "grid":{
            "xs":7,
            "md":4	
        }	
    },
    "boolean": {			//TODO!!!
        "type":TextFilter,
        "grid":{
            "xs":7,
            "md":4	
        } 	
    }
};


const Filter = (props) => {
    let {filterType,handleFilterRemove,handleFilterOption,handleFilterValue,...otherProps}=props;
    if (!filterType) {
        return null;
    }
    let {filterProps}=props;
    const SpecificFilter = FILTER_COMPONENTS[filterType].type;
    return(
		<Col xs={FILTER_COMPONENTS[filterType].grid.xs} md={FILTER_COMPONENTS[filterType].grid.md} >
			<span style={{"maxWidth":"100px","display":"block"}}>
			    <ControlLabel>{filterProps.name}</ControlLabel>
			    <InputGroup style={{"borderSpacing":"0"}}>
			    	{filterProps.allowOptions?<FilterOption {...otherProps} handleFilterOption={handleFilterOption}/>:null}
			    	<SpecificFilter {...otherProps} handleFilterValue={handleFilterValue}/>
		        	<InputGroup.Addon style={{"cursor":"pointer","width":"15px"}} onClick={() => {handleFilterRemove(props.tableName, filterProps);}}>X</InputGroup.Addon>        
		        </InputGroup>			    
			</span>	
		</Col>	
	);    
}

export default Filter;