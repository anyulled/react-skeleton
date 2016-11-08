import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {FormGroup, ControlLabel} from "react-bootstrap";
import {danger} from "../../utils/colors";

const DatePicker = ({label,onBlur,specific:{format},name,value,...field}) => {
	if(value==""){//prevent redux-form initial values
		value=undefined;
	}
	return (
       <ReactDatePicker 
            	className="react-datepicker-datagrid-filter" 
            	onBlur={()=>onBlur(value)} 
            	selected={value} 
            	dateFormat={format?format:null}
            	{...field} 
            />
    );
}

export default DatePicker;