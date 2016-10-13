import axios from "axios";
import config from "../../config";


export const TABLES_FILTER_LOAD = "tables/filter/load";
export const TABLES_FILTER_SET_ACTIVE = "tables/filter/set/active";
export const TABLES_FILTER_CLEAR = "tables/filter/clear";
export const TABLES_FILTER_ERROR = "tables/filter/error";
export const TABLES_FILTER_SEARCH_VALUE = "tables/filter/search/value";
export const TABLES_FILTER_SEARCH_OPTION = "tables/filter/search/option";
export const TABLES_COLUMN_SET_ORDER = "tables/column/set/order";
export const TABLES_ROW_SET_ORDER = "tables/row/set/order";

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
