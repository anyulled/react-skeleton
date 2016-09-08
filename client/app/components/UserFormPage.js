import React from 'react';
import { connect } from 'react-redux';
import * as userActions from "../actions/users/users";
import { reduxForm } from 'redux-form';
import UserForm from "../containers/UserForm";
import UserTable from "../containers/UserTable";

const UserFormPage = (props) => {
	return (<div>
		<UserForm/>
		<h3>This is for display purposes only. Any changes on the user list will be undone upon re-rendering.</h3>
		<UserTable/>
  
	</div>);
}

export default UserFormPage;