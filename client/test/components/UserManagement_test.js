import React, {Component} from "react";
import ReactDOM from "react-dom";
import {expect} from "chai";
import {Provider} from "react-redux";
import UserManagement from "../../app/components/UserManagement";
import * as userActions from "../../app/actions/users/users";
import * as tableActions from "../../app/actions/tables/tables";
import * as modalActions from "../../app/actions/modal/modal";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import TestUtils from 'react-addons-test-utils';
import nock from "nock";
import logger from "redux-logger";
import modal from "../../app/reducers/modal/modal";
import tables from "../../app/reducers/tables/tables";
import users from "../../app/reducers/users/users";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import RootModal from "../../app/containers/RootModal";
import AddUser from "../../app/containers/AddUser";
import {reducer as formReducer} from "redux-form";

describe("<UserManagement/>", () => {
	let store;
	let container  = document.createElement('div');		
	
	beforeEach(function() {
		store = createStore(combineReducers({
			users,
			modal,
			tables,
			form: formReducer
		}),compose(applyMiddleware(
			thunk
			//,logger()
		)));
		
		nock.cleanAll();
		nock("http://localhost:3000")
		.persist()
        .get("/users")
        .reply(200, entries);		
	});	
	afterEach(function(){
		ReactDOM.unmountComponentAtNode(container);
		container.innerHTML="";
	});
	
	it("should mount", function () {  	
		let connectedApp = ReactDOM.render(<Provider store={store}><UserManagement/></Provider>, container);
		expect(connectedApp).to.exist;
    }); 
		
	it("should, on new user click, prepare the modal in NEW_USER mode with no data", function (done) {  	
		let connectedApp = ReactDOM.render(<Provider store={store}><UserManagement/></Provider>, container);
		expect(connectedApp).to.exist;
		let addUser=TestUtils.findRenderedComponentWithType(connectedApp,AddUser);
		expect(addUser).to.exist;
		TestUtils.Simulate.click(ReactDOM.findDOMNode(addUser));
		setTimeout(function () {
 			let modalStore=store.getState().modal;
 			expect(modalStore).to.exist;
 			expect(modalStore.modalType).to.eql("NEW_USER");
 			let modalProps=modalStore.modalProps;
 			expect(modalProps).to.eql({});
 			done();
 		}, 500);
    }); 
	
	it("should, on edit click, prepare the modal in edit mode with the entity data", function (done) {  	
		let connectedApp = ReactDOM.render(<Provider store={store}><UserManagement/></Provider>, container);
		setTimeout(function () {
			let items=TestUtils.scryRenderedDOMComponentsWithClass(connectedApp,"editRowBtn");
	   		expect(items.length).to.above(1);
	   		let item=items[0];
	   		TestUtils.Simulate.click(item);
	   		/*
	    	 * This event is expected to open the modal for the first entry:
	    	 * {
	    	 * "id":"000000061",
	    	 * "name":"John Doe",
	    	 * "yearOfBirth":"1996",
	    	 * "country":"UK",
	    	 * "username":"jdoe"
	    	 * }
	    	 */
	   		setTimeout(function () {
	    		let modalStore=store.getState().modal;
	    		expect(modalStore).to.exist;
	    		expect(modalStore.modalType).to.eql("EDIT_USER");
	    		let modalProps=modalStore.modalProps;
	    		expect(modalProps).to.eql({user:entries[0]});
	    		done();
    		}, 500);
        }, 1000);
    }); 
	
	
});
	
	
const entries=[{
	"id":"000000061",
	"name":"John Doe",
	"yearOfBirth":"1996",
	"country":"UK",
	"username":"jdoe"
},
{
	"id":"000000062",
	"name":"Erika Mustermann",
	"yearOfBirth":"1965",
	"country":"GERMANY",
	"username":"erikamustermann"
},
{
	"id":"000000063",
	"yearOfBirth":"1975",
	"name":"Yamada Taro",
	"country":"JAPAN",
	"username":"yamadat"
}];