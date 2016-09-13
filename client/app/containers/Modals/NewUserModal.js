import React from 'react';
import { Modal, Button } from "react-bootstrap";
import FieldGroup from "../../components/FieldGroup";
import Select from "../../components/Select";
import { reduxForm } from 'redux-form';
import * as userActions from "../../actions/users/users";
import * as uiActions from "../../actions/ui/ui";

const clearForm = (dispatch) => {
	dispatch(uiActions.modalHide());
}

const submitAdd = (id, values, dispatch) => {
    dispatch(userActions.userAdd(values));
	clearForm(dispatch);
};

const submitCancelEdit = (dispatch) => {
    clearForm(dispatch);
};

let countries = [
	"FRANCE",
	"GERMANY",
	"IRELAND","ITALY","JAPAN","SPAIN","UK","USA","VENEZUELA"
];

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

const NewUserModal = ({ fields: {
            name, yearOfBirth, country, username
        }, handleSubmit, dispatch, show }) => {
			const tsubmit = submitAdd.bind(undefined, dispatch);
			const cESubmit = submitCancelEdit.bind(undefined, dispatch);
			return (<Modal onHide={cESubmit} show={show}>
				<Modal.Header closeButton>
					<Modal.Title>New User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={handleSubmit(tsubmit)}>

						<FieldGroup label='Name' field={name} />
						<FieldGroup label='Year of Birth' field={yearOfBirth} />
						<FieldGroup label='Username' field={username} />
						<Select label='Country' field={country} options={
							[
								{name:"Select one", id:""},
								...countries.map(a => ({'id': a, 'name': a}))
							]
						} />	
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button type='button' bsStyle="info" onClick={handleSubmit(tsubmit)}>
						Save
					</Button>
					<Button  type='button' bsStyle="warning" onClick={cESubmit}>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>);
		};
		
const mapStateToProps = (state, props) => {

    return {
        initialValues: {}
    };
};
		 

export default reduxForm({
	form: "newUserForm",
	fields: ['name', 'yearOfBirth', 'username', 'country'],
	validate
}, mapStateToProps)(NewUserModal);