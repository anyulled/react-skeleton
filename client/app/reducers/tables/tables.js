import * as actions from "../../actions/tables/tables.js";

const initialState = { //Each table we may perform actions upon requires an object of its own
		userTable: {
			columnOrder: ["id","name", "yearOfBirth","country","username"], //the first element cannot be ordered no matter what
			rowSortKey: "id",
			rowSortDesc: false
		}
	};

const userTable = (state, action) => {
	switch (action.type) {
		case actions.TABLES_USER_SET_COLUMN_ORDER:
			return {
				...state,
				columnOrder: action.columnOrder
			};
		case actions.TABLES_USER_SET_ROW_ORDER:
			return {
				...state,
				rowSortKey: action.rowSortKey,
				rowSortDesc: state.rowSortKey === action.rowSortKey ? !state.rowSortDesc : false 
			}
	}
	return state;
};

const tables = (state = initialState, action) => {
	if (!action) {
        return state;
    }
	
	switch (action.type) {
		case actions.TABLES_USER_SET_COLUMN_ORDER:
		case actions.TABLES_USER_SET_ROW_ORDER:
			return {
				...state,
				userTable: userTable(state.userTable, action)
			};
	}
	return state;
};

export default tables;