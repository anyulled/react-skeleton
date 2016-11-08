import * as actions from "../../actions/tooltips/tooltips.js";

export const addUserTooltip = (state = [], action) => {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case actions.USER_ADD_TOOLTIP:
      return {...state, ...action.addUserButtonTooltip};
    case actions.ERROR:
      return state;
  }
  return state;
};

export const editUserTooltip = (state = [], action) => {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case actions.USER_EDIT_TOOLTIP:
      return {...state, ...action.editUserButtonTooltip};
    case actions.ERROR:
      return state;
  }
  return state;
};
