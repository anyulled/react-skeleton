import React from "react";
import {danger} from "../utils/colors";
import {FormControl, FormGroup, ControlLabel} from "react-bootstrap";

const Select = ({field, label, options, ...props}) => {
	const {initialValue, autofill, onUpdate, valid, invalid, dirty, pristine, error, active, touched, visited, autofilled, ...rest } = field;
    return (<FormGroup>
        <ControlLabel htmlFor={field.name}>{label}</ControlLabel>
        <FormControl componentClass="select" {...rest} {...props}>
            {options.map(c => <option value={c.id} key={c.id}>{c.name}</option>)}
        </FormControl>
        {field.touched && field.error && <div style={{color: "white", backgroundColor: danger}}>{field.error}</div>}
    </FormGroup>);
};

Select.propTypes = {
    field: React.PropTypes.object.isRequired,
    label: React.PropTypes.string.isRequired,
    options: React.PropTypes.array
};

export default Select;