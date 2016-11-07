import axios from "axios";
import config from "../../config";

export const TABLES_USER_SET_COLUMN_ORDER = "tables/user/column_order/set";
export const TABLES_USER_SET_ROW_ORDER = "tables/user/row_sort_key/set";
export const TABLES_USER_FILTER_ADD = "tables/user/filter/add";
export const TABLES_USER_FILTER_REMOVE = "tables/user/filter/remove";
export const TABLES_USER_FILTER_VALUE = "tables/user/filter/value";
export const TABLES_USER_FILTER_OPTION = "tables/user/filter/option";
export const TABLES_FILTER_LOAD = "tables/filter/load";
export const TABLES_FILTER_SET_ACTIVE = "tables/filter/set/active";
export const TABLES_FILTER_CLEAR = "tables/filter/clear";
export const TABLES_FILTER_ERROR = "tables/filter/error";
export const TABLES_FILTER_SEARCH_VALUE = "tables/filter/search/value";
export const TABLES_FILTER_SEARCH_OPTION = "tables/filter/search/option";
export const TABLES_COLUMN_SET_ORDER = "tables/column/set/order";
export const TABLES_ROW_SET_ORDER = "tables/row/set/order";

export function userTableColumnOrderSet(columns) {
    return {
        type: TABLES_USER_SET_COLUMN_ORDER,
        columns
    };
}

export function userTableRowOrderSet(rowSortKey) {
    return {
        type: TABLES_USER_SET_ROW_ORDER,
        rowSortKey
    };
}

export function userTableFilterAdd(column) {
    return {
        type: TABLES_USER_FILTER_ADD,
        column
    };
}
export function userTableFilterRemove(column) {
    return {
        type: TABLES_USER_FILTER_REMOVE,
        column
    };
}
export function userTableFilterSearch(column,value) {
    return {
        type: TABLES_USER_FILTER_VALUE,
        column,
        value
    };
}
export function userTableFilterOption(column,value) {
    return {
        type: TABLES_USER_FILTER_OPTION,
        column,
        value
    };
}

export function filterAdd(table, filter) {
    return {
        type: TABLES_FILTER_SET_ACTIVE,
        table,
        filter,
        active:true
    };
}

export function filterRemove(table, filter) {
    return {
        type: TABLES_FILTER_SET_ACTIVE,
        table,
        filter,
        active:false
    };
}

export function filterLoad(table) {
	return function (dispatch) {
        dispatch({
            type: TABLES_FILTER_CLEAR,
            table
        });
        axios.get(config.api.url + "/" + table + "/filters")
            .then((data) => {
                dispatch({
                    type: TABLES_FILTER_LOAD,
                    table,
                    payload: data.data
                });
            }).catch((error)=> {
                dispatch({
                    type: TABLES_FILTER_ERROR,
                    table,
                    payload: error
                });
            });
    };
}

export function filterSearchValue(table,filter,value) {
    return {
        type: TABLES_FILTER_SEARCH_VALUE,
        table,
        filter,
        value
    };
}

export function filterSearchOption(table,filter,option) {
    return {
        type: TABLES_FILTER_SEARCH_OPTION,
        table,
        filter,
        option
    };
}

export function tableColumnOrderSet(table,columns) {
    return {
        type: TABLES_COLUMN_SET_ORDER,
        table,
        columns
    };
}

export function tableRowOrderSet(table,column) {
    return {
        type: TABLES_ROW_SET_ORDER,
        table,
        rowSortKey:column
    };
}
