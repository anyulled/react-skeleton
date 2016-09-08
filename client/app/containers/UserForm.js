import React from 'react';
import { connect } from 'react-redux';
import * as userActions from "../actions/users/users";
import * as uiActions from "../actions/ui/ui";
import { reduxForm, reset } from 'redux-form';
import Input from "../components/Input";
import Select from "../components/Select";
import { danger, info, warning } from '../utils/colors';

const clearForm = (dispatch) => {
	dispatch(uiActions.editingUserChanged(false));
	dispatch(userActions.userEdit({}));
	dispatch(reset("userForm"));
}

const submitAdd = (id, values, dispatch) => {
    dispatch(userActions.userAdd(values));
	clearForm(dispatch);
};

const submitUpdate = (id, dispatch, values) => {
    dispatch(userActions.userUpdate(id, values));
	clearForm(dispatch);
};

const submitCancelEdit = (id, values, dispatch) => {
    clearForm(dispatch);
};

let countries = [
	"FRANCE",
	"GERMANY",
	"IRELAND","ITALY","JAPAN","SPAIN","UK","USA","VENEZUELA"
]

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

class UserForm extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let { fields: {
            name, yearOfBirth, country, username
        }, handleSubmit, dispatch, id, isEditingUser } = this.props;
		const tsubmit = submitAdd.bind(undefined, dispatch);
		const usubmit = submitUpdate.bind(undefined, id, dispatch);
		const cESubmit = submitCancelEdit.bind(undefined, dispatch);
		return (<form onSubmit={handleSubmit(tsubmit)}>

				<Input label='Name' field={name} />
				<Input label='Year of Birth' field={yearOfBirth} />
				<Input label='Username' field={username} />
				<Select label='Country' field={country} options={
					[
						{name:"Select one", id:""},
						...countries.map(a => ({'id': a, 'name': a}))
					]
				} />
				{ !isEditingUser ? <button d type='button' className='button button-primary' style={{backgroundColor: info}} onClick={handleSubmit(tsubmit)}>
					New
				</button>:null}
				{ isEditingUser ? <button  type='button' className='button button-primary' style={{backgroundColor: info}} onClick={handleSubmit(usubmit)}>
					Save
				</button>:null}
				{ isEditingUser ? <button  type='button' className='button button-primary' style={{backgroundColor: warning}} onClick={handleSubmit(cESubmit)}>
					Cancel
				</button>:null}
				
			</form>);
	}
}

const mapStateToProps = (state, props) => {
	let initial = {};
	const { user } = state.users;
	if( user ) { 
         initial = user; 
	} 

    return {
        initialValues: initial,
		id: initial.id,
		isEditingUser: state.ui.isEditingUser
    };
};

export default reduxForm({
	form: "userForm",
	fields: ['name', 'yearOfBirth', 'username', 'country'],
	validate
}, mapStateToProps)(UserForm);
