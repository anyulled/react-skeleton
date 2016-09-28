import * as actions from "../../actions/content/content.js";

const content = (action) => {
    switch (action.type) {
        case actions.CONTENT_UPDATE:
        	return action.payload;
    }
};

export const contents = (state = {}, action) => {
    if (!action) {
        return state;
    }
    switch (action.type) {
        case actions.CONTENT_UPDATE:
            return content(action);
        case actions.CONTENT_UNMOUNT:
            return {};
        case actions.ERROR:
            return state;
    }
    return state;
};

const contentHeader = (action) => {
    switch (action.type) {
        case actions.CONTENT_LIST_UPDATE:
        	return action.payload;
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
            return [contentHeader(action)];
        case actions.ERROR:
            return state;
    }
    return state;
};
