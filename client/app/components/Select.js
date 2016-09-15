import React from "react"
import {danger} from "../utils/colors";
import {FormControl, FormGroup, ControlLabel} from "react-bootstrap";

const Select = ({field, label, options, ...props}) => {
    return (<FormGroup>
        <ControlLabel htmlFor={field.name}>{label}</ControlLabel>
        <FormControl componentClass="select" {...field} {...props}>
            {options.map(c => <option value={c.id} key={c.id}>{c.name}</option>)}
        </FormControl>
        {field.touched && field.error && <div style={{color: "white", backgroundColor: danger}}>{field.error}</div>}
    </FormGroup>);
};

Select.proptypes = {
    field: React.PropTypes.object.isRequired,
    label: React.PropTypes.string.isRequired
};

export default Select;