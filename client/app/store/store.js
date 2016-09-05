import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import { modelReducer,  formReducer } from 'react-redux-form';
import {reducer as ReduxFormReducer} from "redux-form";
import logger from "redux-logger";
import thunk from "redux-thunk";

import genericReducer from "../reducers/generic/generic";
import users from "../reducers/users/users";

const initialUserState = {
		  firstName: '',
		  lastName: ''
		};


export default createStore(combineReducers({
	user: modelReducer('user', initialUserState),
	userForm: formReducer('user', initialUserState),
    generic: genericReducer,
	users: users,
    form: ReduxFormReducer
}), compose(
    applyMiddleware(thunk, logger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
