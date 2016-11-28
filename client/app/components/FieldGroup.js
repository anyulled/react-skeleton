import React from "react";
import {danger} from "../utils/colors";
import {FormControl, FormGroup, ControlLabel} from "react-bootstrap";

const FieldGroup = ({field, label}) => {
    const {initialValue, autofill, onUpdate, valid, invalid, dirty, pristine, error, active, touched, visited, autofilled, ...rest} = field;
    return (<FormGroup>
        <ControlLabel htmlFor={field.name}>{label}</ControlLabel>
        <FormControl type="text" className="u-full-width" {...rest} />
        {field.touched && field.error && <div style={{color: "white", backgroundColor: danger}}>{field.error}</div>}
    </FormGroup>);
};

FieldGroup.propTypes = {
    field: React.PropTypes.object.isRequired,
    label: React.PropTypes.string.isRequired
};

export default FieldGroup;