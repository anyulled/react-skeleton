import React, {Component} from "react";
import ReactDOM from "react-dom";
import {expect} from "chai";
import UserTable from "../../app/containers/UserTable";
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

describe("<UserTable/>", () => {
	let store;
	let container  = document.createElement('div');		
	
	const props = {
			data: [],
	        columns: [],
	        rowSortKey: "",
	        rowSortDesc: false,
	        edit: true,
	        reorderableColumns:true,
	        rowHeight:1
		}
	beforeEach(function() {
		store = createStore(combineReducers({
			users,
			modal,
			tables
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
		let connectedApp = ReactDOM.render(<UserTable {...props} store={store}/>, container);
		expect(connectedApp).to.exist;
    }); 
		
	it("should have a consistent number of rows (including headers)", function (done) {
    	let connectedApp = ReactDOM.render(<UserTable {...props} store={store}/>, container);
		setTimeout(function () {
    		 let items=TestUtils.scryRenderedDOMComponentsWithClass(connectedApp,"fixedDataTableRowLayout_rowWrapper");
    		 expect(items.length).to.eql(entries.length+1); //the table header is also here!!!    		 
    		 done();
         }, 1000);
    });
    	
	it("should allow sorting by a column", function (done) {
    	let connectedApp = ReactDOM.render(<UserTable {...props} store={store}/>, container);
		let orderColumn="Year of Birth";
    	setTimeout(function () {
    		let items=TestUtils.scryRenderedDOMComponentsWithTag(connectedApp,"a").filter(a=>a.textContent.trim()===orderColumn);
    		expect(items).to.exist;
    		expect(items.length).to.eql(1);
    		let item=items[0];
    		TestUtils.Simulate.click(item);
    		/*
    		 * This event is expected to sort the table data by "yearOfBirth" asc, so the first
    		 * user will be the one from 1965 (id 000000062)
    		 */
    		setTimeout(function () {
    			let rows=TestUtils.scryRenderedDOMComponentsWithClass(connectedApp,"fixedDataTableRowLayout_rowWrapper");
    			expect(rows.length).to.eql(entries.length+1); //the table header is also here!!!
    			let firstDataRow=rows[1];
    			expect(firstDataRow.textContent.includes("000000062")).to.eql(true);
    			done();
    		}, 500);		
         }, 500);
    });
    	
	it("should allow reordering columns", function () {
		console.log(">> TODO should allow reordering columns!!!")
    });
	
	it("should, on edit click, prepare the modal in edit mode with the entity data", function (done) {
		let connectedApp = ReactDOM.render(<UserTable {...props} store={store}/>, container);
		setTimeout(function () {
    		 let items=TestUtils.scryRenderedDOMComponentsWithClass(connectedApp,"glyphicon-pencil");
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