import Rules from "./Rules";
import * as types  from "./Types";
import moment from "moment";

const RuleMap=Rules.reduce((ruleArray,rule)=>{ruleArray[rule.name]=rule.method; return ruleArray},{});

export default function validate(values,fieldData){
	let errors={};
	console.log("validating")
	console.log(values)
	console.log(fieldData)
	Object.keys(values).map(key=>{
		if(fieldData[key] && values[key]){//TODO ADD FULL CHECK (handle undefineds)
			let evalValue=values[key];
			if(fieldData.specific && fieldData.specific.format){
				switch (fieldData.type) {
					case types.TYPE_DATE: 
						evalValue=moment(evalValue, fieldData.specific.format).toDate();
					break;
				}
			}
			let rules=fieldData[key].validation || [];
			rules.map(rule=>{
				if(rule.type && RuleMap[rule.type]){
					let ruleValue=rule.value;
					if(fieldData.specific && fieldData.specific.format){
						switch (fieldData.type) {
							case types.TYPE_DATE: 
								ruleValue=moment(ruleValue, fieldData.specific.format).toDate();
							break;
						}
					}
					console.log(RuleMap[rule.type](evalValue,ruleValue,rule.value));
				}
			})	
		}		
	})
	console.log(fieldData)
	console.log(RuleMap);
	// let formattedEvalValue=moment(evalValue, format).toDate();
	// let formattedRuleValue=moment(ruleValue, format).toDate();
				
	return errors;
}
