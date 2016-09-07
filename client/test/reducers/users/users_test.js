import usersReducer from "../../../app/reducers/users/users";
import { USER_ADD } from "../../../app/actions/users/users";
import mocha from "mocha";
import { expect } from "chai";

describe("users reducer", () => {
	it("should return an initial state when called with no params", () => {
		expect(usersReducer()).to.eql([]);
	});
	
	it("should return a new state with one user after adding one", () => {
		let user = {
			"id":"123456789",
			"name":"Lukas Müller",
			"yearOfBirth":"1900",
			"country":"GERMANY",
			"username":"lmuller"
		};

		let newState = usersReducer({}, {
			type: USER_ADD,
			payload: user
		});
		expect(newState).to.eql([user]);
	});
	
	it("should be able to add more than one user", () => {
		let user = {
			"id":"123456789",
			"name":"Sofia Müller",
			"yearOfBirth":"1975",
			"country":"GERMANY",
			"username":"smuller"
		};

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
	
	it("should append to the state, not modify it", () => {
		let state = [{whatever:"whatever"}];
		let user = {
			"id":"123456789",
			"name":"Sofia Müller",
			"yearOfBirth":"1975",
			"country":"GERMANY",
			"username":"smuller"
		};
		let newState = usersReducer(state, {
			type: USER_ADD,
			payload: user
		});
		expect(newState).to.eql([...state, user]);
	});
	
});