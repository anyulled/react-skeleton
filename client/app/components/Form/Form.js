import React from "react"
import {reduxForm} from "redux-form";
import Input from "./Input";
import Select from "../Select";

const FORM_COMPONENTS = {
    "text": Input,
    "date": Input
};

const Form = ({fieldData, fields, handleSubmit,handleFormSubmit, dispatch,...props}) => {
    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            {Object.keys(fields).map((fieldName,i)=>{
                let data=fieldData[fieldName];
                let Field=FORM_COMPONENTS[data.type];
                return (<Field key={i} {...fields[fieldName]} {...data}/>)
            })}
            <button onClick={handleSubmit(handleFormSubmit)}> Submit </button>
        </form>
    );
};

export default reduxForm({ 
    form: "dynamicForm",
    validate: (values, props) => {
        if(typeof props.handleFormValidation === "function"){
            props.handleFormValidation(values,props.fieldData);
        }
    }
})(Form);