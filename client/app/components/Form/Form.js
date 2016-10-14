import React from "react"
import {reduxForm} from "redux-form";
import Input from "./Input";
import Select from "../Select";

const FORM_COMPONENTS = {
    "text": Input,
    "date": Input
};

const submitUpdate = (dispatch,values) => {
    console.log(values)
};

const Form = ({fieldData, fields, handleSubmit, dispatch,...props}) => {
    const usubmit = submitUpdate.bind(undefined, dispatch);
    console.log(fieldData);
    return (
        <form onSubmit={handleSubmit(usubmit)}>
            {Object.keys(fields).map((fieldName,i)=>{
                let data=fieldData[fieldName];
                let Field=FORM_COMPONENTS[data.type];
                return (<Field key={i} {...fields[fieldName]} {...data}/>)
            })}
            <button onClick={handleSubmit(usubmit)}> Submit </button>
        </form>
    );
};

export default reduxForm({ form: "dynamicForm"})(Form);