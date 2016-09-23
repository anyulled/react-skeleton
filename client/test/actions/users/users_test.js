import * as actions from "../../../app/actions/users/users";
import {expect} from "chai";
import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("users actions", () => {
    it("should provide usersLoad action", () => {
        expect(actions.usersLoad).to.be.a("function");
    });

    describe("usersLoad", () => {

        it("should dispatch two actions, the second one asynchronously", (done) => {
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
            }, 1000);

        });

    });


});