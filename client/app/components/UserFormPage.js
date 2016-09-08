import React from 'react';
import { connect } from 'react-redux';
import * as userActions from "../actions/users/users";
import { reduxForm } from 'redux-form';
import UserForm from "../containers/UserForm";
import UserTable from "../containers/UserTable";

const submit = (id, values, dispatch) => {
    dispatch(userActions.userAdd(values));
};

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    }
	if (!values.yearOfBirth) {
        errors.yearOfBirth = 'Required';
    }
	if (!values.username) {
        errors.username = 'Required';
    }
	if (!values.country) {
        errors.country = 'Required';
    }
    return errors;
}

const UserFormPage = (props) => {
	return (<div>
		<UserForm/>
		<h3>This is for display purposes only. Any changes on the user list will be undone upon re-rendering.</h3>
		<UserTable/>
  
	</div>);
}

export default UserFormPage;