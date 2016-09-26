import React from "react";
import {mount,shallow } from "enzyme";
import {expect} from "chai";

import jsdom from "jsdom";
const doc = jsdom.jsdom("<!doctype html><html><body></body></html>");
import * as actions from "../../app/actions/content/content";
global.document = doc;
global.window = doc.defaultView;

import Content from "../../app/components/Content";

describe("<Content/>", () => {
	
	const fullProps = {
		contentHeadersLoad: actions.contentHeadersLoad,
		headerList:[
	     	{
	        	"id": "1", 
	        	"name": "Pangram A", 
	        	"route": "/content/1"
	    	},
	        {
	            "id": "2", 
	            "name": "Pangram B", 
	            "route": "/content/2"
	        },
	        {
	            "id": "3", 
	            "name": "Pangram C", 
	            "route": "/content/3"
	        }
	    ],
	    content:{
	    	"title":"German pangram",
	    	"description":"Sylvia wagt quick den Jux bei Pforzheim"
	    }
	}
	
	const defaultProps = {
		contentHeadersLoad: null,
		headerList:null,
	    content:null
	}
	
	function setup(props) {		
		const enzymeWrapper = shallow(<Content {...props} />)

		return {
			props,
			enzymeWrapper
		}
	}


    it("should mount with full props", function () {
    	const enzymeWrapper = setup(fullProps);
        expect(enzymeWrapper).to.exist;
    });
	it("should mount with null props", function () {
    	const enzymeWrapper = setup(defaultProps);
        expect(enzymeWrapper).to.exist;
    });
    

});