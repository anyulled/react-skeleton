import React from "react";
import {danger} from "../../utils/colors";
import {FormControl, FormGroup, ControlLabel} from "react-bootstrap";

const Input = ({label,...field}) => {

	const {initialValue, autofill, onUpdate, valid, invalid, dirty, pristine, 
        error, active, touched, visited, autofilled,validation, specific,...rest } = field;
    return (
        <FormControl type="text" className="u-full-width" {...rest}/> 
    );
};

Input.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired
};

export default Input;