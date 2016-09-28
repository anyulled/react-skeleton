import React, {Component} from "react";
import ReactDOM from "react-dom";
import {expect} from "chai";
import RootModal from "../../app/containers/RootModal";
import {Modal} from "react-bootstrap";
import * as userActions from "../../app/actions/users/users";
import * as modalActions from "../../app/actions/modal/modal";
import thunk from "redux-thunk";
import TestUtils from 'react-addons-test-utils';
import logger from "redux-logger";
import modal from "../../app/reducers/modal/modal";
import users from "../../app/reducers/users/users";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import {reducer as formReducer} from "redux-form";

describe("Modals", () => {
	
	describe("<RootModal/>", () => {
		let store;
		let container = document.createElement('div');		
		const user={
			"id":"000000061",
			"name":"John Doe",
			"yearOfBirth":"1996",
			"country":"UK",
			"username":"jdoe"
		};
		
		beforeEach(function() {
			store = createStore(combineReducers({
				users,
				modal,
				form: formReducer
			}),compose(applyMiddleware(
				thunk
				//,logger()
			)));			
		});	
		
		afterEach(function(){
			ReactDOM.unmountComponentAtNode(container);
			container.innerHTML="";
		});
		
		it("should mount in EDIT mode", function () {
			let props={
				modalType:"EDIT_USER",
				modalProps:user
			}
			let connectedApp = ReactDOM.render(<Provider store={store}><RootModal {...props}/></Provider>, container);
			expect(connectedApp).to.exist;
	    }); 
		
		it("should mount in NEW mode", function () {
			let props={
				modalType:"NEW_USER"
			}
			let connectedApp = ReactDOM.render(<Provider store={store}><RootModal {...props}/></Provider>, container);
			expect(connectedApp).to.exist;
	    }); 
	});
});
	
	
