import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";

import jsdom from "jsdom";
const doc = jsdom.jsdom("<!doctype html><html><body></body></html>");
global.document = doc;
global.window = doc.defaultView;

import Sidebar from "../../../app/components/UI/Sidebar";

describe("<Sidebar/>", () => {
	
	let items = null;
	beforeEach(() => {
		items = new Array();
		items.push({"id": "1", "name": "tab 1", "route": "/link1"});
		items.push({"id": "2", "name": "tab 2", "route": "/link2"});
		items.push({"id": "3", "name": "tab 3", "route": "/link3"});
	});
	
	it("should mount", () => {
		const wrapper = mount(<Sidebar items={items}/>);
		expect(wrapper.find('.nav.nav-pills li')).to.have.length(3);
	});
	
});