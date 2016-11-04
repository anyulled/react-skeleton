import * as actions from "../../actions/users/users.js";

const user = (state = [], action) => {
    switch (action.type) {
        case actions.USER_ADD:
            return action.payload;
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
    }
};

export const users = (state = [], action) => {
    if (!action) {
        return state;
    }
    switch (action.type) {
        case actions.USER_ADD:
            //if the payload is an array, we add it to the state
            if (Array.isArray(action.payload)) {
                return [...state, ...action.payload];
            }
            return [...state, user(undefined, action)]; //we're simply concatenating the state array and the new user
        case actions.USER_REMOVE:
            return state.filter(u => user(u, action));
        case actions.USER_UPDATE:
            return state.map(u => user(u, action));
        case actions.USER_CLEAR:
            return [];
        case actions.ERROR:
            return state;
    }
    return state;
};

export const usersTooltips = (state = [], action) => {
    if (!action) {
        return state;
    }
    switch (action.type) {
        case actions.USER_BUTTON_INFO:
            return {...state, ...action.buttonInfo};
        case actions.ERROR:
            return state;
    }
    return state;
};


export default users;