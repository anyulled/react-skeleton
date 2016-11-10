import * as actions from "../../actions/reduxSample/reduxSample.js";

const initialState = {
        fetching: false,
        name: "Button default name",
        style: "primary"
}

function reduxSample(state = initialState, action) {
    switch (action.type) {
        case actions.REQUEST_INFO:
            return Object.assign({}, state, { fetching: true });
        case actions.RECEIVE_INFO:
            return Object.assign({}, state, { fetching: false }, action.info );
        case actions.ERROR:
            return state;
    }

    return state;
}

export default reduxSample;
