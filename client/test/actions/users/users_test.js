import * as actions from "../../../app/actions/users/users";
import {expect} from "chai";
import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("users actions", () => {
    

    describe("usersLoad", () => {
    	it("should provide usersLoad action", () => {
            expect(actions.usersLoad).to.be.a("function");
        });
    	it("on OK, should dispatch two actions, the second one asynchronously", (done) => {            
    		let store = mockStore({users: []});
            nock("http://localhost:3000")
                .get("/users")
                .reply(200, [{
                    "id": "000000061",
                    "name": "John Doe",
                    "yearOfBirth": "1996",
                    "country": "UK",
                    "username": "jdoe"
                }]);

            store.dispatch(actions.usersLoad());

            setTimeout(function () {
            	expect(store.getActions()).to.have.length(2);  
            	done();
            }, 100);            
        });
        it("on ERROR, should dispatch two actions, the second one asynchronously", (done) => {            
        	let store = mockStore({users: []});
            nock("http://localhost:3000")
            .get("/users")
            .replyWithError("Something went wrong");

            store.dispatch(actions.usersLoad());

            setTimeout(function () {
            	expect(store.getActions()).to.have.length(2);  
            	done();
            }, 100);
        });
    });
    
    describe("userAdd", () => {
	    it("should provide userAdd action", () => {
	        expect(actions.userAdd).to.be.a("function");
	    });
	    it("should dispatch one action", (done) => {
	    	let store = mockStore({});
	        store.dispatch(actions.userAdd({
                "id": "100000061",
                "name": "John Doe",
                "yearOfBirth": "1996",
                "country": "UK",
                "username": "jdoe"
            }));
            expect(store.getActions()).to.have.length(1);  
            done();
        });
    });
    describe("userRemove", () => {
	    it("should provide userRemove action", () => {
	        expect(actions.userRemove).to.be.a("function");
	    });
	    it("should dispatch one action", (done) => {
	    	let store = mockStore({});
	        store.dispatch(actions.userRemove({
                "id": "100000061"
            }));
            expect(store.getActions()).to.have.length(1);  
            done();
        });
    });
    describe("userUpdate", () => {
	    it("should provide userUpdate action", () => {
	        expect(actions.userUpdate).to.be.a("function");
	    });
	    it("should dispatch one action", (done) => {
	    	let store = mockStore({});
	        store.dispatch(actions.userUpdate({
                "id": "100000061",
                "name": "John Doe",
                "yearOfBirth": "1996",
                "country": "UK",
                "username": "jdoe"
            }));
            expect(store.getActions()).to.have.length(1);  
            done();
        });
	});
});