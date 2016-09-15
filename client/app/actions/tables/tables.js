export const TABLES_USER_SET_COLUMN_ORDER = "tables/user/column_order/set";

export function userTableColumnOrderSet(columnOrder) {
	return {
		type: TABLES_USER_SET_COLUMN_ORDER,
		columnOrder
	};
}