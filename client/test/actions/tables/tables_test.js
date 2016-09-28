import * as actions from "../../../app/actions/tables/tables";
import {expect} from "chai";
import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("tables actions", () => {    

    describe("userTableColumnOrderSet", () => {
    	it("should provide userTableColumnOrderSet action", () => {
            expect(actions.userTableColumnOrderSet).to.be.a("function");
        });
    	it("should dispatch one action", (done) => {
	    	let store = mockStore({});
	        store.dispatch(actions.userTableColumnOrderSet({}));
            expect(store.getActions()).to.have.length(1);  
            done();
        });
    });
    
    describe("userTableRowOrderSet", () => {
	    it("should provide userTableRowOrderSet action", () => {
	        expect(actions.userTableRowOrderSet).to.be.a("function");
	    });
	    it("should dispatch one action", (done) => {
	    	let store = mockStore({});
	        store.dispatch(actions.userTableRowOrderSet({}));
            expect(store.getActions()).to.have.length(1);  
            done();
        });
    });
});