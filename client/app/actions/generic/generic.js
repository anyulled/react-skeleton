import axios from "axios";
import config from "../../config";

export const ACTION_ONE = "action_one";
export const ACTION_TWO = "action_two";
export const ACTION_THREE = "action_three";
export const ERROR = "error";

export function actionOne(dto) {
    return {
        type: ACTION_ONE,
        payload: dto
    };
}

export function actionTwo(id) {
    return function (dispatch) {
        dispatch({
            type: ACTION_TWO,
            id: id
        });
    };
}

export function actionThree(params = null) {
    return function (dispatch) {
        dispatch({
            type: ACTION_THREE
        });
        axios.get(config.api.url + "/mock/mock_data.json", {params})
            .then((data)=> {
                dispatch({
                    type: ACTION_THREE,
                    payload: data.data
                });
            })
            .catch((error)=> {
                dispatch({
                    type: ERROR,
                    payload: error
                });
            });
    };
}