import * as actions from "../../../app/actions/modal/modal";
import {expect} from "chai";
import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("modal actions", () => {    

    describe("modalNewUser", () => {
    	it("should provide modalNewUser action", () => {
            expect(actions.modalNewUser).to.be.a("function");
        });
    	it("should dispatch one action", (done) => {
	    	let store = mockStore({});
	        store.dispatch(actions.modalNewUser());
            expect(store.getActions()).to.have.length(1);  
            done();
        });
    });
    
    describe("modalEditUser", () => {
	    it("should provide modalEditUser action", () => {
	        expect(actions.modalEditUser).to.be.a("function");
	    });
	    it("should dispatch one action", (done) => {
	    	let store = mockStore({});
	        store.dispatch(actions.modalEditUser({}));
            expect(store.getActions()).to.have.length(1);  
            done();
        });
    });
    
    describe("modalHide", () => {
    	it("should provide modalHide action", () => {
            expect(actions.modalHide).to.be.a("function");
        });
    	it("should dispatch one action", (done) => {
	    	let store = mockStore({});
	        store.dispatch(actions.modalHide());
            expect(store.getActions()).to.have.length(1);  
            done();
        });
    });
});