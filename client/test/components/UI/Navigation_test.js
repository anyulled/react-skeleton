import React from "react";
import { mount } from "enzyme";
import {expect} from "chai";
import Navigation from "../../../app/components/UI/Navigation";

describe('<Navigation/>', function () {
	it('should mount without any issues', function () {
		const wrapper = mount(<Navigation/>);
		expect(wrapper).to.exist;
	});
});