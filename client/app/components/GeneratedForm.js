import React from "react";
import * as userActions from "../actions/users/users";
import {reduxForm} from "redux-form";
import Input from "../components/Input";
import Select from "../components/Select";

const submit = (id, values, dispatch) => {
    dispatch(userActions.userAdd(values));
};

let countries = [
    "GERMANY", "IRELAND", "ITALY", "JAPAN", "SPAIN", "UK", "USA"
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

const GeneratedForm = (props) => {
    const {
        fields: {
            name, yearOfBirth, country, username
        }, handleSubmit, dispatch
    } = props;
    const tsubmit = submit.bind(undefined, dispatch);
    return (<form onSubmit={handleSubmit(tsubmit)}>

        <Input label="Name" field={name}/>
        <Input label="Year of Birth" field={yearOfBirth}/>
        <Input label="Username" field={username}/>
        <Select label="Country" field={country} options={
            [
                {name: "Select one", id: ""},
                ...countries.map(a => ({"id": a, "name": a}))
            ]
        }/>
        <button onClick={handleSubmit(tsubmit)}>
            Create new user
        </button>
    </form>);
};

const mapStateToProps = (state, props) => {
    return {
        initialValues: {}
    }
};

export default reduxForm({
    form: "userForm",
    fields: ["name", "yearOfBirth", "username", "country"],
    validate
}, mapStateToProps)(GeneratedForm);