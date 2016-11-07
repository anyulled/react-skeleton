import axios from "axios";
import config from "../../config";

export const USER_ADD = "user/add";
export const USER_REMOVE = "user/remove";
export const USER_UPDATE = "user/update";
export const USER_CLEAR = "user/clear";
export const ERROR = "error";
let nextUserId = 1;

export function userAdd(dto) {
    return {
        type: USER_ADD,
        payload: {
            ...dto,
            id: nextUserId++
        }
    };
}

export function userRemove(id) {
    return {
        type: USER_REMOVE,
        id
    };
}

export function userUpdate(id, user) {
    return {
        type: USER_UPDATE,
        id: id,
        payload: user
    };
}

export function usersLoad(filters) {	
    return function (dispatch) {
        dispatch({
            type: USER_CLEAR
        });
        let params="";
        if(filters){
            params=filters
        	.filter(e=>e.searchValue)
        	.map(e=>e.key+"="+formatFilterValue(e))
        	.join("&");
            
            let options=filters
        	.filter(e=>e.searchValue && e.searchOptionValue)
        	.map(e=>e.key+"Option="+e.searchOptionValue)
        	.join("&");
            if(options.length>0){
            	params += "&"+options
            }
        }
        console.log(params);
        axios.get(config.api.url + "/users"+(params.length>0?"?"+params:""))
            .then((data) => {
                dispatch({
                    type: USER_ADD,
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

function formatFilterValue(filter){
	switch(filter.type){
	case "date": //Moment @see http://momentjs.com/
		return filter.searchValue.format("YYYY-MM-DD");
	default:
		return filter.searchValue.trim();
	}
}





