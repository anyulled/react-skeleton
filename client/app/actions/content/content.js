import axios from "axios";
import config from "../../config";

export const CONTENT_UPDATE = "content/update";
export const CONTENT_UNMOUNT = "content/unmount";
export const CONTENT_LIST_UPDATE = "content/list/update";
export const ERROR = "error";

let nextContentId = 1;

export function contentUpdate(dto) {
    return {
        type: CONTENT_UPDATE,
        payload: {
            ...dto,
            id: nextContentId++
        }
    };
}

export function contentLoad(id, params = null) {
    return function (dispatch) {
    	axios.get(config.api.url + "/content/"+id, {params})
        .then((data) => {
            dispatch({
                type: CONTENT_UPDATE,
                payload: data.data
            });
        }).catch((error)=> {
            dispatch({
                type: ERROR,
                payload: error
            });
        });
    };
}

export function unmount() {
    return {
        type: CONTENT_UNMOUNT
    };
}


export function contentHeadersLoad(params = null) {
    return function (dispatch) {
    	axios.get(config.api.url + "/content", {params})
        .then((data) => {
            dispatch({
                type: CONTENT_LIST_UPDATE,
                payload: data.data
            });
        }).catch((error)=> {
            dispatch({
                type: ERROR,
                payload: error
            });
        });
    };
}
