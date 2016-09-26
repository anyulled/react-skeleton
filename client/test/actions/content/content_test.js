import * as actions from "../../../app/actions/content/content";
import {expect} from "chai";
import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("content actions", () => {    

    describe("contentUpdate", () => {
    	it("should provide contentUpdate action", () => {
            expect(actions.contentUpdate).to.be.a("function");
        });
    	it("should dispatch one action", (done) => {
	    	let store = mockStore({});
	        store.dispatch(actions.contentUpdate());
            expect(store.getActions()).to.have.length(1);  
            done();
        });
    });
    
    describe("contentLoad", () => {
    	it("should provide contentLoad action", () => {
            expect(actions.contentLoad).to.be.a("function");
        });
    	it("on OK, should dispatch one action asynchronously", (done) => {            
    		let store = mockStore({});
            nock("http://localhost:3000")
                .get("/content/1")
                .reply(200, [{}]);

            store.dispatch(actions.contentLoad("1"));

            setTimeout(function () {
            	expect(store.getActions()).to.have.length(1);  
            	done();
            }, 100);            
        });
    	it("on ERROR, should dispatch one action asynchronously", (done) => {            
    		let store = mockStore({});
            nock("http://localhost:3000")
                .get("/content/1")
                .replyWithError("Something went wrong");

            store.dispatch(actions.contentLoad("1"));

            setTimeout(function () {
            	expect(store.getActions()).to.have.length(1);  
            	done();
            }, 100);            
        });
    	it("should dispatch one action", (done) => {
	    	let store = mockStore({});
	        store.dispatch(actions.contentUpdate());
            expect(store.getActions()).to.have.length(1);  
            done();
        });
    });
    
    describe("unmount", () => {
	    it("should provide unmount action", () => {
	        expect(actions.unmount).to.be.a("function");
	    });
	    it("should dispatch one action", (done) => {
	    	let store = mockStore({});
	        store.dispatch(actions.unmount());
            expect(store.getActions()).to.have.length(1);  
            done();
        });
    });
    
    describe("contentHeadersLoad", () => {
    	it("should provide contentHeadersLoad action", () => {
            expect(actions.contentHeadersLoad).to.be.a("function");
        });
    	it("on OK, should dispatch one action asynchronously", (done) => {            
    		let store = mockStore({});
            nock("http://localhost:3000")
                .get("/content")
                .reply(200, [{}]);

            store.dispatch(actions.contentHeadersLoad());

            setTimeout(function () {
            	expect(store.getActions()).to.have.length(1);  
            	done();
            }, 100);            
        });
    	it("on ERROR, should dispatch one action asynchronously", (done) => {            
    		let store = mockStore({});
            nock("http://localhost:3000")
                .get("/content")
                .replyWithError("Something went wrong");

            store.dispatch(actions.contentHeadersLoad("1"));

            setTimeout(function () {
            	expect(store.getActions()).to.have.length(1);  
            	done();
            }, 100);            
        });
    	it("should dispatch one action", (done) => {
	    	let store = mockStore({});
	        store.dispatch(actions.contentUpdate());
            expect(store.getActions()).to.have.length(1);  
            done();
        });
    });
});