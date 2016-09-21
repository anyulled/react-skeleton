export const TABLES_USER_SET_COLUMN_ORDER = "tables/user/column_order/set";
export const TABLES_USER_SET_ROW_ORDER = "tables/user/row_sort_key/set";

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
