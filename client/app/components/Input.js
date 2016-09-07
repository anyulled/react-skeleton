import React from 'react';
 
export default ({field, label}) => (<div> 
	 <label htmlFor={field.name}>{label}</label> 
	 <input type='text' className="u-full-width" {...field} /> 
</div>);
