import axios from "axios";
import config from "../../config";

export const REQUEST_INFO = "requestInfo";
export const RECEIVE_INFO = "receiveInfo";
export const ERROR = "error";

export function fetchReduxSampleInfo () {
    return dispatch => {
        dispatch(requestInfo());
        axios.get(config.api.url + "/reduxSample")
             .then((data) => { dispatch(receiveInfo(data.data)); })
             .catch((error)=> { dispatch(receiveInfoError(error)); });
    };
}

function requestInfo() {
    return { type: REQUEST_INFO }
}

function receiveInfo (info) {
    return { type: RECEIVE_INFO, info };
}

function receiveInfoError (error) {
    return { type: ERROR, error };
}
