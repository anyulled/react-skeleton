import axios from "axios";
import config from "../../config";

export const ACTION_ONE = "action_one";
export const ACTION_TWO = "action_two";
export const ACTION_THREE = "action_three";

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
        axios.get(config.api.url + "/mock/mock_data.json", {params}).then((data)=> {
            console.log(data);
            dispatch({
                type: ACTION_THREE
            });
        });
    };
}