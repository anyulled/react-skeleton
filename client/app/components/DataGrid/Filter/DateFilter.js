import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../stylesheets/components/DataGrid/Filter/DateFilter.css";

const DateFilter = (props) => {
    let handleChange = function (date, event) {
        props.handleFilterValue(props.tableName, props.filterProps, date);
    };
    return (
        <DatePicker className="react-datepicker-datagrid-filter" selected={props.selected} onChange={handleChange}
                    dateFormat="YYYY-MM-DD"/>
    );
};

export default DateFilter;