import * as actions from "../../actions/tables/tables.js";

const startingColumns = [{
    key: "id",
    title:"ID",
    width: 100,
    type: "integer"
},
    {
        key: "name",
        title:"Name",
        width: 200,
        type: "string"
    },
    {
        key: "yearOfBirth",
        title:"Year of Birth",
        width: 150,
        type: "date"
    },
    {
        key: "country",
        title:"Country",
        width: 100,
        type: "string"
    },
    {
        key: "username",
        title:"Username",
        width: 150,
        type: "string"
    }];

const initialState = { // Each table we may perform actions upon requires an
        // object of its own
    userTable: {
        columns: startingColumns, // the first element cannot be ordered
            // no matter what
        rowSortKey: "id",
        rowSortDesc: false,
        filters:[],
        pageNumber:2,
        numberOfPages:4
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
        case actions.TABLES_USER_FILTER_ADD:
            let filters=state.filters;
            if(filters.filter(function(e) {return e.key == action.column.key;}).length==0){
                filters=[...filters,action.column];
            }
            return {
                ...state,
                filters
            };
        case actions.TABLES_USER_FILTER_REMOVE:
            filters=state.filters.map(function (filter) {
                let e={...filter};
                if(e.key==action.column.key){
                    delete e.searchValue;
                }
                return e;
            }).filter(function(e) {return e.key != action.column.key;});
            return {
                ...state,
                filters
            };
        case actions.TABLES_USER_FILTER_VALUE:
            filters=state.filters.map(function (filter) {
                let ret={...filter};
                if(ret.key==action.column.key){
                    if(action && action.value==""){
                        ret.searchValue=null;
                    }else{
                        ret.searchValue=action.value;	
                    }        			
                }
                return ret;
            });
            return {
                ...state,
                filters
            };
        case actions.TABLES_USER_FILTER_OPTION:
            filters=state.filters.map(function (filter) {
                let ret={...filter};
                if(ret.key==action.column.key){
                    ret.searchOptionValue=action.value;
                }
                return ret;
            });
            return {
                ...state,
                filters
            };
        case actions.TABLES_USER_PAGINATION:
            return {
                ...state,
                pageNumber: action.value
            }

     }
};

const tables = (state = initialState, action) => {
    if (!action) {
        return state;
    }
    //TODO FIXME ARGC merge the userTable method with this one
    switch (action.type) {
        case actions.TABLES_USER_SET_COLUMN_ORDER:
        case actions.TABLES_USER_SET_ROW_ORDER:
        case actions.TABLES_USER_FILTER_ADD:
        case actions.TABLES_USER_FILTER_REMOVE:
        case actions.TABLES_USER_FILTER_VALUE:
        case actions.TABLES_USER_FILTER_OPTION:
        case actions.TABLES_USER_PAGINATION:
            return {
                ...state,
                userTable: userTable(state.userTable, action)
            };
    }
    return state;
};

export default tables;