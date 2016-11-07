import React from "react";
import {FormGroup} from "react-bootstrap";
import Multiselect from "react-bootstrap-multiselect";

const CustomMultiselect = ({...props}) => {
    
    let handleSelectEvent=function(option, check){
    	
    	let id=option[0].parentElement.id;
    	let value=option[0].id;

    	event(id, value, check, parent);
    }
    
    let {data, selected, event, id, multiple, parent, label} = props;

    return  (
        <FormGroup>
            <p>{label}</p>
            <Multiselect id={id} data={data} onChange={handleSelectEvent} disabled={Object.keys(data).length>0?null:true} multiple={multiple=="single_select"?null:true} />
        </FormGroup>
   	);  
}

export default CustomMultiselect;

