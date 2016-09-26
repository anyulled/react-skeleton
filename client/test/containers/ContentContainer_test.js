import React from "react";
import ReactDOM from "react-dom";
import {mount,shallow } from "enzyme";
import {expect} from "chai";
import Content from "../../app/components/Content";
import ContentContainer from "../../app/containers/ContentContainer";
import * as actions from "../../app/actions/content/content";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import TestUtils from 'react-addons-test-utils';
import nock from "nock";
import logger from "redux-logger";
import {contentHeaders, contents} from "../../app/reducers/content/content";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";

describe("<ContentContainer/>", () => {
	let store,connectedApp;
	var container;
	const entries=[
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
   ];
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
		container = document.createElement('div');
		connectedApp = TestUtils.renderIntoDocument(<Provider store={store}><ContentContainer /></Provider>,container);
		
	});	
	
	it("should mount", function () {  	
        expect(connectedApp).to.exist;
    });
	
    it("should have a consistent number of sidebar entries", function (done) {
    	 setTimeout(function () {
    		 const items=TestUtils.scryRenderedDOMComponentsWithTag(connectedApp,"li");
    		 expect(items.length).to.eql(entries.length);
             done();
         }, 100);
    });
    
//    it("should load the content appropiately after selecting a sidebar entry", function (done) {
//    	setTimeout(function () {
//    		const items=TestUtils.scryRenderedDOMComponentsWithTag(connectedApp,"li");
//    		expect(items.length).to.eql(entries.length+1);
//    		done();
//    	}, 100);
//    });
    
//    it("should reset when unmount", function () {
//    	container = document.createElement('div');
//		connectedApp = TestUtils.renderIntoDocument(<ContentContainer store={store}/>,container);
//		ReactDOM.unmountComponentAtNode(container);
//    });
	
});