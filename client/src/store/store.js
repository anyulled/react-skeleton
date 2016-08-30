import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {reducer as ReduxFormReducer} from "redux-form";
import thunk from "redux-thunk";

import genericReducer from "../reducers/generic";


export default createStore(combineReducers({
    generic: genericReducer
}), compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));