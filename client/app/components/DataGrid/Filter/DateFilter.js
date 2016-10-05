import React from "react";
import {MenuItem,DropdownButton,InputGroup,FormControl} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "../../../stylesheets/components/DataGrid/Filter/DateFilter.css";

class DateFilter extends React.Component {
	render() {
		let {handleFilterValue,filterProps,...props}=this.props;
		return(
			<DatePicker className="react-datepicker-datagrid-filter" dateFormat='DD-MM-YYYY'/>	        	
		)
	}
};

export default DateFilter;