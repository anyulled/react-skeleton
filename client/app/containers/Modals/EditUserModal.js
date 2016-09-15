import React from "react";
import {Modal, Button} from "react-bootstrap";
import FieldGroup from "../../components/FieldGroup";
import Select from "../../components/Select";
import {reduxForm} from "redux-form";
import * as userActions from "../../actions/users/users";
import * as uiActions from "../../actions/ui/ui";

const clearForm = (dispatch) => {
    dispatch(uiActions.modalHide());
};

const submitUpdate = (id, dispatch, values) => {
    dispatch(userActions.userUpdate(id, values));
    clearForm(dispatch);
};

const submitRemove = (id, dispatch) => {
    dispatch(userActions.userRemove(id));
    clearForm(dispatch);
};

const submitCancelEdit = (dispatch) => {
    clearForm(dispatch);
};

let countries = [
    "FRANCE", "GERMANY", "IRELAND", "ITALY", "JAPAN", "SPAIN", "UK", "USA", "VENEZUELA"
];

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = "Required";
    }
    if (!values.yearOfBirth) {
        errors.yearOfBirth = "Required";
    }
    if (!values.username) {
        errors.username = "Required";
    }
    if (!values.country) {
        errors.country = "Required";
    }
    return errors;
};

const EditUserModal = ({
    fields: {
        name, yearOfBirth, country, username
    }, handleSubmit, dispatch, id, show
}) => {
    const usubmit = submitUpdate.bind(undefined, id, dispatch);
    const cESubmit = submitCancelEdit.bind(undefined, dispatch);
    const dsubmit = submitRemove.bind(undefined, id, dispatch);
    return (<Modal onHide={cESubmit} show={show}>
        <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={handleSubmit(usubmit)}>

                <FieldGroup label="Name" field={name}/>
                <FieldGroup label="Year of Birth" field={yearOfBirth}/>
                <FieldGroup label="Username" field={username}/>
                <Select label="Country" field={country} options={
                    [
                        {name: "Select one", id: ""},
                        ...countries.map(a => ({"id": a, "name": a}))
                    ]
                }/>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <Button type="button" bsStyle="info" onClick={handleSubmit(usubmit)}>
                Save
            </Button>
            <Button type="button" bsStyle="danger" onClick={handleSubmit(dsubmit)}>
                Delete
            </Button>
            <Button type="button" bsStyle="warning" onClick={cESubmit}>
                Cancel
            </Button>
        </Modal.Footer>
    </Modal>);
};

const mapStateToProps = (state, props) => {
    let initial = {};
    const {user} = props;
    if (user) {
        initial = user;
    }

    return {
        initialValues: initial,
        id: initial.id,
    };
};

export default reduxForm({
    form: "editUserForm",
    fields: ["name", "yearOfBirth", "username", "country"],
    validate
}, mapStateToProps)(EditUserModal);