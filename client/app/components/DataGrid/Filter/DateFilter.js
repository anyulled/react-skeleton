import React from "react";
import {MenuItem,DropdownButton,InputGroup,FormControl} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../stylesheets/components/DataGrid/Filter/DateFilter.css";
import moment from "moment";

class DateFilter extends React.Component {	
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		
    } 	
	handleChange(date) {
		this.props.handleFilterValue(this.props.filterProps,date);
	}
	render() {
		let {handleFilterValue,filterProps,...props}=this.props;
		return(
			<DatePicker className="react-datepicker-datagrid-filter" selected={this.props.selected} onChange={this.handleChange} dateFormat='DD-MM-YYYY'/>	        	
		)
	}
};

export default DateFilter;