import React from "react";
import {danger} from "../utils/colors";
import {FormControl, FormGroup, ControlLabel} from "react-bootstrap";

export default ({field, label}) => (<FormGroup>
    <ControlLabel htmlFor={field.name}>{label}</ControlLabel>
    <FormControl type="text" className="u-full-width" {...field} />
    {field.touched && field.error && <div style={{color: "white", backgroundColor: danger}}>{field.error}</div>}
</FormGroup>).propTypes = {field: React.PropTypes.object.isRequired, label: React.PropTypes.string.isRequired};
