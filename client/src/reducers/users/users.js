import * as actions from "../../actions/users/users.js";

const user = (state = [], action) => {
	switch (action.type) {
		case actions.USER_ADD:
			return action.payload;
			break;
		case actions.USER_REMOVE:
			if (state.id !== action.id) {
				return state;
			}
			break;
		case actions.USER_UPDATE:
			if (state.id !== action.id) {
				return state;
			}
			return Object.assign({}, state, action.payload);
			break;
		default:
			return state;
	}
}
//This must be removed soon
var usr = [
	{
		"id":"000000061",
		"name":"John Doe",
		"yearOfBirth":"1996",
		"country":"UK",
		"username":"jdoe"
	},
	{
		"id":"000000062",
		"name":"Erika Mustermann",
		"yearOfBirth":"1975",
		"country":"GERMANY",
		"username":"erikamustermann"
	},
	{
		"id":"000000063",
		"yearOfBirth":"1965",
		"name":"Yamada Taro",
		"country":"JAPAN",
		"username":"yamadat"
	},
	{
		"id":"000000064",
		"name":"Jack Smith",
		"yearOfBirth":"1972",
		"country":"USA",
		"username":"jasmi"
	},
	{
		"id":"000000065",
		"name":"Jan Nichts",
		"yearOfBirth":"1967",
		"country":"GERMANY",
		"username":"jnichts"
	},
	{
		"id":"000000066",
		"name":"Juan Nadie",
		"yearOfBirth":"1980",
		"country":"VENEZUELA",
		"username":"juannadie"
	},{
		"id":"000000067",
		"name":"Josephine Martin",
		"yearOfBirth":"1986",
		"country":"FRANCE",
		"username":"jmartin"
	},{
		"id":"000000068",
		"name":"Mario Rossi",
		"yearOfBirth":"1974",
		"country":"ITALY",
		"username":"mrossi"
	},
	{
		"id":"000000069",
		"name":"María García",
		"yearOfBirth":"1979",
		"country":"SPAIN",
		"username":"mgarcia"
	},
	{
		"id":"000000070",
		"name":"Gerardo López",
		"yearOfBirth":"1981",
		"country":"SPAIN",
		"username":"mlopez"
	},
	{
		"id":"000000071",
		"name":"Jane Johnson",
		"yearOfBirth":"1991",
		"country":"USA",
		"username":"janejohnson"
	},
	{
		"id":"000000072",
		"name":"Will O'Connor",
		"yearOfBirth":"1958",
		"country":"IRELAND",
		"username":"ericoconnor"
	},
	{
		"id":"000000073",
		"name":"Nobita Rio",
		"yearOfBirth":"1985",
		"country":"JAPAN",
		"username":"nobitar"
	}
]

const users = (state = usr, action) => {
	if (!action) {return state;}
	
	switch (action.type) {
		case actions.USER_ADD:
			if (typeof action.clear !== "undefined" && action.clear === true) {
				return action.payload;
			}		
			//if the payload is an array, we add it to the state
			if (Array.isArray(action.payload)) { return [...state, ...action.payload]; }
			return [ //we're simply concatenating the state array and the new user
				...state,
				user(undefined, action)
			]
			break;
		case actions.USER_REMOVE:
			return state.filter(u => 
				user(u, action)
			);
			break;
		case actions.USER_UPDATE:
			return state.map(u => 
				user(u, action)
			);
			break;
		case actions.USER_CLEAR:
			return [];
		default:
			return state;
	}
}

export default users;