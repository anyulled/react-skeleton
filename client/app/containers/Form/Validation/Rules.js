import * as types from "containers/Form/Validation/Types";

export const requiredRule = {
    "name": "required",
    "method": (evalValue) => {
        return (evalValue != undefined && evalValue != null && evalValue != "") ? null : "Required";
    }
};

export const minRule = {
    "name": "min",
    "method": (evalValue, ruleValue, printableRuleValue, dataType) => {
        let _evalValue, ruleMessage;
        switch (dataType) {
            case types.TYPE_TEXT:
                _evalValue = evalValue.length;
                ruleMessage = `Please enter a text with a minimum of ${printableRuleValue} characters`;
                break;
            case types.TYPE_DATE:
                _evalValue = evalValue;
                ruleMessage = `Please enter a date later or equal to ${printableRuleValue}`;
                break;
            default:
                _evalValue = evalValue;
                ruleMessage = `Minimum allowed value is ${printableRuleValue}`;
        }
        return (_evalValue >= ruleValue) ? null : ruleMessage;
    }
};

export const maxRule = {
    "name": "max",
    "method": (evalValue, ruleValue, printableRuleValue, dataType) => {
        let _evalValue, ruleMessage;
        switch (dataType) {
            case types.TYPE_TEXT:
                _evalValue = evalValue.length;
                ruleMessage = `Please enter a text with a maximum of ${printableRuleValue} characters`;
                break;
            case types.TYPE_DATE:
                _evalValue = evalValue;
                ruleMessage = `Please enter a date earlier or equal to ${printableRuleValue}`;
                break;
            default:
                _evalValue = evalValue;
                ruleMessage = `Maximum allowed value is ${printableRuleValue}`;
        }
        return (_evalValue <= ruleValue) ? null : ruleMessage;
    }
};

export default [requiredRule, minRule, maxRule];