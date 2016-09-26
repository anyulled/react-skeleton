import usersReducer from "../../../app/reducers/users/users";
import {USER_ADD, USER_REMOVE, USER_UPDATE, USER_CLEAR, ERROR} from "../../../app/actions/users/users";
import mocha from "mocha";
import {expect} from "chai";

describe("users reducer", () => {
    it("should return an initial state when called with no params", () => {
        expect(usersReducer()).to.eql([]);
    });

    const user = {
        "id": "123456789",
        "name": "Lukas Müller",
        "yearOfBirth": "1900",
        "country": "GERMANY",
        "username": "lmuller"
    };
    const users = [{
    	"id": "2",
    	"name": "Sofia Müller",
        "yearOfBirth": "1975",
        "country": "GERMANY",
        "username": "smuller"
     },
     user
     ];
    it("should return a new state with one user after adding one", () => {       

        let newState = usersReducer({}, {
            type: USER_ADD,
            payload: user
        });
        expect(newState).to.eql([user]);
    });

    it("should be able to add more than one user", () => {
        
        let newState = usersReducer({}, {
            type: USER_ADD,
            payload: user
        });

        newState = usersReducer(newState, {
            type: USER_ADD,
            payload: user
        });
        expect(newState).to.have.length(2);
    });
    
    it("should be able to add more than one user in a batch", () => {
        let newState = usersReducer({}, {
            type: USER_ADD,
            payload: [...users]
        });

        expect(newState).to.have.length(users.length);
    });

    it("should append to the state, not modify it", () => {
        let state = [{whatever: "whatever"}];
        
        let newState = usersReducer(state, {
            type: USER_ADD,
            payload: user
        });
        expect(newState).to.eql([...state, user]);
    });
    it("should remove with only id passed", () => {
        let state = [user];
        
        let newState = usersReducer(state, {
            type: USER_REMOVE,
            id: "123456789"
        });
        expect(newState).to.have.length(0);
    });
    
    it("should skip remove with not found id", () => {
        let state = [user];
        
        let newState = usersReducer(state, {
            type: USER_REMOVE,
            id: "123"
        });
        expect(newState).to.have.length(state.length);
    });
    it("should update the requested entity only", () => {
        let state = [...users];
        
        let newUserData = user;
        newUserData.name="GFT random name";
        
        let newState = usersReducer(state, {
            type: USER_UPDATE,
            payload: newUserData,
            id: newUserData.id
        });
        expect(newState).to.have.length(2);
        expect(newState[1]).to.eql(newUserData);
        expect(newState[0]).to.eql(state[0]);
    });
    it("should keep the state on unknows actions", () => {
        let state = [...users];
        
        let newState = usersReducer(state, {
            type: "USER_UNKNOWN_ACTION"
        });
        expect(newState).to.eql(state);
    });
    it("should keep the state on errors", () => {
        let state = [...user];
        
        let newState = usersReducer(state, {
            type: ERROR
        });
        expect(newState).to.eql(state);
    });
    it("should clear the state", () => {
        let state = [...users];
        
        let newState = usersReducer(state, {
            type: USER_CLEAR
        });
        expect(newState).to.have.length(0);
    });
});