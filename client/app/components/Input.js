import React from 'react';
 
export default ({field, label}) => (<div> 
	 <label htmlFor={field.name}>{label}</label> 
	 <input type='text' className="u-full-width" {...field} /> 
	 {field.touched && field.error && <div style={{color: 'white', backgroundColor: '#c9302c'}}>{field.error}</div>}
</div>);
