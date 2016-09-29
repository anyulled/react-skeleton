import React, {Component} from "react";
import ReactDOM from "react-dom";
import {expect} from "chai";
import RootModal from "../../app/containers/RootModal";
import NewUserModal from "../../app/containers/Modals/NewUserModal";
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
	let container = document.createElement('div');
	let store;
	const user={
		"id":"000000061",
		"name":"John Doe",
		"yearOfBirth":"1996",
		"country":"UK",
		"username":"jdoe"
	};
	let editUserProps={
		modalType:"EDIT_USER",
		modalProps:user
	}
	let newUserProps={
		modalType:"NEW_USER"
	}
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
	
	describe("<RootModal/>", () => {
		it("should mount in EDIT mode", function () {			
			let connectedApp = ReactDOM.render(<Provider store={store}><RootModal {...editUserProps}/></Provider>, container);
			expect(connectedApp).to.exist;
			store.dispatch(modalActions.modalEditUser(user));
	    }); 
		
		it("should mount in NEW mode", function () {			
			let connectedApp = ReactDOM.render(<Provider store={store}><RootModal {...newUserProps}/></Provider>, container);
			expect(connectedApp).to.exist;
			store.dispatch(modalActions.modalNewUser());
	    }); 
	});
	describe("<NewUserModal/>", () => {
		it("should mount", function () {			
			let connectedApp = ReactDOM.render(<NewUserModal store={store} {...newUserProps}/>, container);
			expect(connectedApp).to.exist;
	    }); 
	});
});
	
	
