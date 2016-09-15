import React, { PropTypes } from "react";
import {danger} from "../utils/colors";
import {FormControl, FormGroup, ControlLabel} from "react-bootstrap";

const FieldGroup = ({field, label}) => {
	return (<FormGroup>
		<ControlLabel htmlFor={field.name}>{label}</ControlLabel>
		<FormControl type="text" className="u-full-width" {...field} />
		{field.touched && field.error && <div style={{color: "white", backgroundColor: danger}}>{field.error}</div>}
	</FormGroup>);
}

FieldGroup.propTypes = {field: PropTypes.object.isRequired, label: PropTypes.string.isRequired};

export default FieldGroup;
