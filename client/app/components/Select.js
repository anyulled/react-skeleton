import React from 'react'
import { danger } from '../utils/colors';

export default ({field, label, options, ...props}) => (<div>
	<label htmlFor={field.name}>{label}</label>
	<select type='text' className="u-full-width" {...field} {...props} >
		{options.map(c => <option value={c.id} key={c.id} >{c.name}</option>)}
	</select>
	{field.touched && field.error && <div style={{color: 'white', backgroundColor: danger}}>{field.error}</div>}
</div>);