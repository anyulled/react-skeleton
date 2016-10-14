import React, {PropTypes} from "react";
import {connect} from "react-redux";
// import * as formActions from "../actions/form/form";
import Form from "../../components/Form/Form";

let formFields=[
    {
        "name":"id",
        "label":"Identifier",
        "type":"text",
        "specific":{},
        "validation":[
            "rule":{
                "type":"required",
                "value":true      
            },
            "rule":{
                "type":"min",
                "value":4         
            },
            "rule":{
                "type":"max",
                "value":10         
            }
        ]
    },
    {
        "name":"creationDate",
        "label":"Creation date",
        "type":"date",
        "specific":{
            "format":"YYYY-MM-DD"
        },
        "validation":[
            "rule":{
                "type":"required",
                "value":true      
            },
            "rule":{
                "type":"min",
                "value":"2016-05-01"    //date format must be the same as the input field format
            }            
        ]
    }
];

const mapStateToProps = (state, ownProps) => {
	return {
        fieldData:formFields.reduce((data,field)=>{data[field.name]=field; return data },{}),
        fields:formFields.map(e=>e.name)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleFormSubmit: (...values) => {
            console.log(values)
        }        
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);