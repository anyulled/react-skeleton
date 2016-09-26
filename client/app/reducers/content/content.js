import * as actions from "../../actions/content/content.js";

const content = (state = {}, action) => {
    switch (action.type) {
        case actions.CONTENT_UPDATE:
            return action.payload;
        default:
            return state;
    }
};

export const contents = (state = {}, action) => {
    if (!action) {
        return state;
    }
    switch (action.type) {
        case actions.CONTENT_UPDATE:
            return content(undefined, action);
        case actions.CONTENT_UNMOUNT:
            return {};
        case actions.ERROR:
            return state;
    }
    return state;
};

const contentHeader = (state = [], action) => {
    switch (action.type) {
        case actions.CONTENT_LIST_UPDATE:
            return action.payload;
        default:
            return state;
    }
};

export const contentHeaders = (state = [], action) => {
    if (!action) {
        return state;
    }
    switch (action.type) {
        case actions.CONTENT_LIST_UPDATE:
            if (Array.isArray(action.payload)) {
                return [...action.payload];
            }
            return [contentHeader(undefined, action)];
        case actions.ERROR:
            return state;
    }
    return state;
};
