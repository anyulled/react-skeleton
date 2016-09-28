import * as actions from "../../actions/tables/tables.js";

const startingColumns = [{
    key: "id",
    title:"ID",
    width: 150
},
    {
        key: "name",
        title:"Name",
        width: 200
    },
    {
        key: "yearOfBirth",
        title:"Year of Birth",
        width: 150
    },
    {
        key: "country",
        title:"Country",
        width: 150
    },
    {
        key: "username",
        title:"Username",
        width: 150
    }];

const initialState = { // Each table we may perform actions upon requires an
        // object of its own
    userTable: {
        columns: startingColumns, // the first element cannot be ordered
            // no matter what
        rowSortKey: "id",
        rowSortDesc: false
    }
};



const userTable = (state, action) => {
    switch (action.type) {
        case actions.TABLES_USER_SET_COLUMN_ORDER:
            return {
                ...state,
                columns: action.columns
            };
        case actions.TABLES_USER_SET_ROW_ORDER:
            return {
                ...state,
                rowSortKey: action.rowSortKey,
                rowSortDesc: state.rowSortKey === action.rowSortKey ? !state.rowSortDesc : false 
            };
    }
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