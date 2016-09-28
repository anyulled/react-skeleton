import React from "react";
import ReactDOM from "react-dom";
import {expect} from "chai";
import Widgets from "../../app/components/Widgets";
import TestUtils from 'react-addons-test-utils';
import moment from "moment";

describe("<Widgets/>", () => {
	let store;
	let container  = document.createElement('div');		
	
	
	it("should mount", function () {  	
		let instance = TestUtils.renderIntoDocument(<Widgets/>);
		expect(instance).to.exist;
    });
	it("should update the date correctly", function () {  	
		let instance = TestUtils.renderIntoDocument(<Widgets/>);
		expect(instance).to.exist;
		let date=moment();
		instance.handleDatePickerChange(date);		
		expect(instance.state.selectedDate.utc()).to.eql(date.utc());
    });
});