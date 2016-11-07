import axios from "axios";
import config from "../../config";

export const LOAD_DATA = "multiselect/load";

export function load(){
    return function (dispatch) {
        axios.get(config.api.url + "/multiselect")
        .then((data) => {
            dispatch({
                type: LOAD_DATA,
                payload: data.data
            });
        });
    };
};