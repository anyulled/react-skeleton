import React from 'react'
import { danger } from '../utils/colors';
import { FormControl, FormGroup, ControlLabel } from "react-bootstrap";

export default ({field, label, options, ...props}) => (<FormGroup>
	<ControlLabel htmlFor={field.name}>{label}</ControlLabel>
	<FormControl componentClass="select" {...field} {...props}>
		{options.map(c => <option value={c.id} key={c.id} >{c.name}</option>)}
	</FormControl>
	{field.touched && field.error && <div style={{color: 'white', backgroundColor: danger}}>{field.error}</div>}
</FormGroup>);