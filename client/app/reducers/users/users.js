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

const users = (state = [], action) => {
    if (!action) {
        return state;
    }

    switch (action.type) {
        case actions.USER_ADD:
            if (typeof action.clear !== "undefined" && action.clear === true) {
                return action.payload;
            }
            //if the payload is an array, we add it to the state
            if (Array.isArray(action.payload)) {
                return [...state, ...action.payload];
            }
            return [ //we're simply concatenating the state array and the new user
                ...state,
                user(undefined, action)
            ];
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
};

export default users;