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
            return {...state, ...action.payload};
            break;
        default:
            return state;
    }
}

const USERS_INITIAL = {
	items: [],
	user: {}
}

const users = (state = USERS_INITIAL, action) => {
    if (!action) {
        return state;
    }

    switch (action.type) {
        case actions.USER_ADD:
            if (typeof action.clear !== "undefined" && action.clear === true) {
                return {
					...state,
					items: action.payload
				};
            }
            //if the payload is an array, we add it to the state
            if (Array.isArray(action.payload)) {
                return {
					...state,
					items: [...state.items, ...action.payload]
				};
            }
			return {
				...state,
				items: [...state.items, user(undefined, action)] //we're simply concatenating the state array and the new user
			};
            break;
        case actions.USER_REMOVE:
            return {
				...state,
				items: state.items.filter(u => user(u, action))
			}
            break;
		case actions.USER_EDIT:
            return {
				...state,
				user: action.payload
			} 
            break;
        case actions.USER_UPDATE:
            return {
				...state,
				items: state.items.map(u => user(u, action))
			} 
            break;
        case actions.USER_CLEAR:
            return {
				...state,
				items: []
			};
        default:
            return state;
    }
};

export default users;