import React from "react";
import {danger} from "../../utils/colors";
import {FormControl, FormGroup, ControlLabel} from "react-bootstrap";

const Input = ({label,...field}) => {

	const {initialValue, autofill, onUpdate, valid, invalid, dirty, pristine, error, active, touched, visited, autofilled,validation, ...rest } = field;
    return (
        <FormGroup>
            <ControlLabel htmlFor={field.name}>{label}</ControlLabel>
            <FormControl type="text" className="u-full-width" {...rest}/>
            {field.touched && field.error && <div style={{color: "white", backgroundColor: danger}}>{field.error}</div>}
        </FormGroup>
    );
};

Input.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired
};

export default Input;