import React from "react";
import { Cell } from "fixed-data-table-2";

function renderSortArrow (sortKey, sortDesc, sortId) {
	return sortKey === sortId ? (sortDesc ? '↓' : '↑') : ''
}

const SortHeaderCell = ({children, sortBy, sortKey, sortDesc, columnKey, ...props}) => {
	const clickFunc = () => sortBy(columnKey);
	return (
		<Cell {...props}>
			<a onClick={clickFunc}>
				{children} {renderSortArrow(sortKey, sortDesc, columnKey)}
			</a>
		</Cell>
	)
};

SortHeaderCell.propTypes = {
	sortBy: React.PropTypes.func.isRequired,
	sortKey: React.PropTypes.string.isRequired,
	sortDesc: React.PropTypes.bool.isRequired,
	columnKey: React.PropTypes.string,
	children: React.PropTypes.any
}

export default SortHeaderCell;