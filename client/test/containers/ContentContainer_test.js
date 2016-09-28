import React from "react";
import ReactDOM from "react-dom";
import {expect} from "chai";
import ContentContainer from "../../app/containers/ContentContainer";
import * as actions from "../../app/actions/content/content";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import TestUtils from 'react-addons-test-utils';
import nock from "nock";
import logger from "redux-logger";
import {contentHeaders, contents} from "../../app/reducers/content/content";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";

describe("<ContentContainer/>", () => {
	let store;
	const entries=[{
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
	}];
	const content1Description="Sylvia wagt quick den Jux bei Pforzheim";
	const content1={
			"title":"German pangram",
			"description":content1Description
	};
	beforeEach(function() {
		store = createStore(
				combineReducers({contents,contentHeaders}), 
				compose(applyMiddleware(thunk
						//,logger()
						)));
		
		nock.cleanAll();
		nock("http://localhost:3000")
		.persist()
        .get("/content")
        .reply(200, entries);
		nock("http://localhost:3000")
		.persist()
        .get("/content/1")
        .reply(200, content1);
		
	});	
	
	it("should mount", function () {  	
		let container  = document.createElement('div');		
		let connectedApp = ReactDOM.render(<ContentContainer store={store}/>, container);
		expect(connectedApp).to.exist;
    });
	
    it("should have a consistent number of sidebar entries", function (done) {
    	let container  = document.createElement('div');
    	let connectedApp = ReactDOM.render(<ContentContainer store={store}/>, container);
		setTimeout(function () {
    		 let items=TestUtils.scryRenderedDOMComponentsWithTag(connectedApp,"li");
    		 expect(items.length).to.eql(entries.length);
    		 items=TestUtils.scryRenderedDOMComponentsWithTag(connectedApp,"a");
    		 expect(items.length).to.eql(entries.length);
             done();
         }, 100);
    });
    
    it("should load the content appropiately after selecting a sidebar entry", function (done) {
    	let props={
    		routeParams:{
    			contentId:1
    		}	
    	}
    
    	let container  = document.createElement('div');
    	let connectedApp = ReactDOM.render(<ContentContainer {...props} store={store}/>, container);
		setTimeout(function () {
    		const items=TestUtils.scryRenderedDOMComponentsWithTag(connectedApp,"p");
    		expect(items.length).to.eql(1);
    		expect(items[0].innerHTML).to.eql(content1Description);
            done();
        }, 100);
    	
    });
    
    it("should reset when unmount", function () {
    	let container  = document.createElement('div');
    	let connectedApp = ReactDOM.render(<ContentContainer store={store}/>, container);
		ReactDOM.unmountComponentAtNode(container);
    });
	
});