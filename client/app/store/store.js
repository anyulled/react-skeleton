import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {reducer as formReducer} from "redux-form";
import logger from "redux-logger";
import thunk from "redux-thunk";

import genericReducer from "../reducers/generic/generic";
import users from "../reducers/users/users";
import modal from "../reducers/modal/modal";
import tables from "../reducers/tables/tables";

export default createStore(combineReducers({
    generic: genericReducer,
	users,
	modal,
	tables,
    form: formReducer
}), compose(
    applyMiddleware(thunk, logger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
