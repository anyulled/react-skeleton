import * as types  from "./Types";

export const requiredRule={
	"name": "required",
	"method": (evalValue)=>{
		return (evalValue!=undefined && evalValue!=null && evalValue!="")?null:"Required";
	}
}

export const minRule={
	"name": "min",
	"method": (evalValue, ruleValue, printableRuleValue,type)=>{//TODO ARGC use text depending on type (longer than, older than)
		return (evalValue.length >= ruleValue)?null:("Please enter a value higher than " + printableRuleValue);
	}
}

export const maxRule={
	"name": "max",
	"method": (evalValue, ruleValue, printableRuleValue)=>{
		return (evalValue.length <= ruleValue)?null:("Please enter a value lower than " + printableRuleValue);
	}
}

export default [requiredRule,minRule,maxRule];