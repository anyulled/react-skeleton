import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {reducer as formReducer} from "redux-form";
import logger from "redux-logger";
import thunk from "redux-thunk";

import genericReducer from "../reducers/generic/generic";
import users from "../reducers/users/users";
import modal from "../reducers/modal/modal";
import tables from "../reducers/tables/tables";
import {contentHeaders, contents} from "../reducers/content/content";
import startDataLayer, {socketMiddleware} from './middleware/socket-data-layer';

//export default createStore(
//	combineReducers({
//	    generic: genericReducer,
//	    users,
//	    modal,
//	    tables,
//	    contents,
//	    contentHeaders,
//	    form: formReducer
//	}), 
//	compose(
//	    applyMiddleware(thunk, logger()),
//	    window.devToolsExtension ? window.devToolsExtension() : f => f
//	)
//);

const store=createStore(
	combineReducers({
	    generic: genericReducer,
	    users,
	    modal,
	    tables,
	    contents,
	    contentHeaders,
	    form: formReducer
	}), 
	compose(
	    applyMiddleware(thunk, logger(),socketMiddleware),
	    window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);
startDataLayer(store);
export default store;
