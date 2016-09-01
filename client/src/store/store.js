import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {reducer as ReduxFormReducer} from "redux-form";
import logger from "redux-logger";
import thunk from "redux-thunk";

import genericReducer from "../reducers/generic";


export default createStore(combineReducers({
    generic: genericReducer,
    form: ReduxFormReducer
}), compose(
    applyMiddleware(thunk, logger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));