import * as actions from "../../actions/reduxSample/reduxSample.js";

const initialState = {
        fetching: false,
        name: "Button default name",
        style: "primary",
        error: ""
}

//function reduxSample(state = initialState, action) {
//    switch (action.type) {
//        case actions.REQUEST_INFO:
//            return Object.assign({}, state, { fetching: true });
//        case actions.RECEIVE_INFO:
//            return Object.assign({}, state, { fetching: false }, action.info );
//        case actions.ERROR:
//            return state;
//    }
//    return state;
//}

function reduxSample(state = initialState, action) {
    if (!action || !action.type) {
        return state;
    }
    
    switch (action.type) {
        case actions.REQUEST_INFO:
            return {...state, fetching: true};
        case actions.RECEIVE_INFO:
            return {...state, fetching: false, ...action.info};
        case actions.ERROR:
            return {...state, fetching: false, ...action.error};
        default:
            return state;
    }
}

export default reduxSample;
