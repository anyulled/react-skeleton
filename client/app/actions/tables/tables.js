export const TABLES_USER_SET_COLUMN_ORDER = "tables/user/column_order/set";
export const TABLES_USER_SET_ROW_ORDER = "tables/user/row_sort_key/set";
export const TABLES_USER_FILTER_ADD = "tables/user/filter/add";
export const TABLES_USER_FILTER_REMOVE = "tables/user/filter/remove";
export const TABLES_USER_FILTER_VALUE = "tables/user/filter/value";

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

export function filterAdd(column) {
    return {
        type: TABLES_USER_FILTER_ADD,
        column
    };
}
export function filterRemove(column) {
    return {
        type: TABLES_USER_FILTER_REMOVE,
        column
    };
}
export function filterSearch(column,value) {
    return {
        type: TABLES_USER_FILTER_VALUE,
        column,
        value
    };
}