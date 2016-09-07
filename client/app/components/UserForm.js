import React from 'react';
import { connect } from 'react-redux';
import * as userActions from "../actions/users/users";
import { reduxForm } from 'redux-form';
import Input from "./Input";
import Select from "./Select";
import UserTable from "../containers/UserTable";

const submit = (id, values, dispatch) => {
    dispatch(userActions.userAdd(values));
};

let countries = [
	"GERMANY",
	"IRELAND","ITALY","JAPAN","SPAIN","UK","USA"
]

const UserForm = (props) => {
	const { fields: {
            name, yearOfBirth, country, username
        }, handleSubmit, dispatch } = props;
	const tsubmit = submit.bind(undefined, dispatch);
	return (<div>
	<form onSubmit={handleSubmit(tsubmit)}>
	      
		    <Input label='Name' field={name} />
			<Input label='Year of Birth' field={yearOfBirth} />
			<Input label='Username' field={username} />
			<Select label='Country' field={country} options={
				[
					{name:"Select one", id:""},
					...countries.map(a => ({'id': a, 'name': a}))
				]
			} />
	        <button onClick={handleSubmit(tsubmit)}>
	          Create new user
	        </button>
	      </form>
		  <h3>This is for display purposes only. The users added using the form will be removed on re-rendering.</h3>
			<UserTable/>
		  
		  </div>);
}

const mapStateToProps = (state, props) => {
    return {
        initialValues: {}
    }
};

export default reduxForm({
	form: "userForm",
	fields: ['name', 'yearOfBirth', 'username', 'country']
}, mapStateToProps)(UserForm);
