import React from "react";
import TextFilter from "./TextFilter";
import DateFilter from "./DateFilter";
import FilterOption from "./FilterOption";
import {InputGroup,Col,ControlLabel} from "react-bootstrap";

const FILTER_COMPONENTS = {
    "integer":{
        "type":TextFilter,
        "grid":{
            "xs":6,
            "md":3	
        },
        "hasOption":false
    },
    "string": {
        "type":TextFilter,
        "grid":{
            "xs":6,
            "md":3	
        },
        "hasOption":false    	
    },
    "date": {
        "type":DateFilter,
        "grid":{
            "xs":7,
            "md":4	
        },
        "hasOption":true    	
    }
};

class Filter extends React.Component {	
	
    render() {
        let {filterType,handleFilterRemove,handleFilterOption,handleFilterValue,...props}=this.props;
        if (!filterType) {
            return null;
        }
        let {filterProps}=this.props;
        const SpecificFilter = FILTER_COMPONENTS[filterType].type;
        return(
			<Col xs={FILTER_COMPONENTS[filterType].grid.xs} md={FILTER_COMPONENTS[filterType].grid.md} >
				<span style={{"maxWidth":"100px","display":"block"}}>
				    <ControlLabel>{filterProps.title}</ControlLabel>
				    <InputGroup style={{"borderSpacing":"0"}}>
				    	{FILTER_COMPONENTS[filterType].hasOption?<FilterOption {...props} handleFilterOption={handleFilterOption}/>:null}
				    	<SpecificFilter {...props} handleFilterValue={handleFilterValue}/>
			        	<InputGroup.Addon style={{"cursor":"pointer","width":"15px"}} onClick={() => {handleFilterRemove(filterProps);}}>X</InputGroup.Addon>        
			        </InputGroup>			    
				</span>	
			</Col>	
		);
    }
}

export default Filter;