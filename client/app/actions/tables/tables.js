export const TABLES_USER_SET_COLUMN_ORDER = "tables/user/column_order/set";
export const TABLES_USER_SET_ROW_ORDER = "tables/user/row_sort_key/set";
export const TABLES_USER_FILTER_ADD = "tables/user/filter/add";
export const TABLES_USER_FILTER_REMOVE = "tables/user/filter/remove";
export const TABLES_USER_FILTER_VALUE = "tables/user/filter/value";
export const TABLES_USER_FILTER_OPTION = "tables/user/filter/option";
export const TABLES_USER_PAGINATION = "tables/user/pagination";

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
export function userTablePagination(value) {
    return {
        type: TABLES_USER_PAGINATION,
        value
    };
}

