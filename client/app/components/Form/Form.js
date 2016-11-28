import React from "react";
import {reduxForm} from "redux-form";
import Input from "./Input";
import DatePicker from "./DatePicker";
import {FormGroup, ControlLabel} from "react-bootstrap";
import {danger} from "../../utils/colors";

const FORM_COMPONENTS = {
    "text": Input,
    "date": DatePicker
};

const Form = ({fieldData, fields, handleSubmit, handleFormSubmit, dispatch, ...props}) => {
    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            {Object.keys(fields).map((fieldName, i) => {
                let data = fieldData[fieldName];
                let Field = FORM_COMPONENTS[data.type];
                return (
                    <FormGroup key={i}>
                        <ControlLabel htmlFor={data.name}>{data.label}</ControlLabel>
                        <Field {...fields[fieldName]} {...data}/>
                        {fields[fieldName].touched
                        && fields[fieldName].error
                        && <div style={{color: "white", backgroundColor: danger}}>{fields[fieldName].error}</div>}
                    </FormGroup>
                );
            })}
            <button onClick={handleSubmit(handleFormSubmit)}> Submit</button>
        </form>
    );
};

export default reduxForm({
    form: "dynamicForm",
    validate: (values, props, ...rest) => {
        if (typeof props.handleFormValidation === "function") {
            return props.handleFormValidation(values, props.fieldData);
        }
    }
})(Form);