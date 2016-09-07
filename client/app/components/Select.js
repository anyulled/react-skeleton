import React from 'react'

export default ({field, label, options, ...props}) => (<div>
	<label htmlFor={field.name}>{label}</label>
	<select type='text' className="u-full-width" {...field} {...props} >
		{options.map(c => <option value={c.id} key={c.id} >{c.name}</option>)}
	</select>
</div>);