import * as actions from "../../actions/ui/ui.js";

const ui = (state={ isEditingUser: false }, action) => {
	if (!action) {
        return state;
    }
	
	switch (action.type) {
        case actions.IS_EDITING_USER:
			return {
				...state,
				isEditingUser: action.isEditingUser
			}
            break;
    }
    return state;
};

export default ui;