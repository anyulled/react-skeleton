import React, {Component} from "react";
import ReactDOM from "react-dom";
import {expect} from "chai";
import {Provider} from "react-redux";
import UsersFixedDataTable2 from "../../app/components/UsersFixedDataTable2";
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

describe("<UsersFixedDataTable2/>", () => {
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
		let connectedApp = ReactDOM.render(<Provider store={store}><UsersFixedDataTable2/></Provider>, container);
		expect(connectedApp).to.exist;
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