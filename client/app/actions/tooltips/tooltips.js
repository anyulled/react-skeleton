import axios from "axios";
import config from "../../config";

export const USER_ADD_TOOLTIP = "addUserButtonInfo";
export const USER_EDIT_TOOLTIP = "editUserButtonInfo";
export const ERROR = "error";

export function getButtonInfo (button){
  return function (dispatch){
    var params = "button=" + button;
    axios.get(config.api.url + "/userButtonsInfo" + (params.length > 0 ? "?" + params : ""))
         .then((data) => {
           dispatch({
             type: USER_BUTTON_INFO,
             buttonInfo: data.data
           });
         })
         .catch((error)=> {
           dispatch({
             type: ERROR,
             buttonInfo: error
           });
         });
    } // function
} // getButtonInfo

export function getAddUserButtonTooltip (){
  return function (dispatch){
    axios.get(config.api.url + "/userButtonsInfo?button=addUserButton")
         .then((data) => {
           dispatch({
             type: USER_ADD_TOOLTIP,
             addUserButtonTooltip: data.data
           });
         })
         .catch((error)=> {
           dispatch({
             type: ERROR,
             addUserButtonTooltip: error
           });
         });
    } // function
} // getAddUserButtonTooltip

export function getEditUserButtonTooltip (){
  return function (dispatch){
    axios.get(config.api.url + "/userButtonsInfo?button=editUserButton")
         .then((data) => {
           dispatch({
             type: USER_EDIT_TOOLTIP,
             editUserButtonTooltip: data.data
           });
         })
         .catch((error)=> {
           dispatch({
             type: ERROR,
             editUserButtonTooltip: error
           });
         });
    } // function
} // getEditUserButtonTooltip
