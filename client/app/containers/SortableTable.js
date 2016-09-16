import React, { PropTypes } from "react";
import { Table, Column, Cell } from "fixed-data-table-2";
import { Glyphicon } from "react-bootstrap";
import TextCell from '../components/TextCell';
import SortHeaderCell from '../components/SortHeaderCell';
import "fixed-data-table-2/dist/fixed-data-table-base.css";
import "fixed-data-table-2/dist/fixed-data-table-style.css";
import "fixed-data-table-2/dist/fixed-data-table.css";	
	
class SortableTable extends React.Component {
	constructor(props) {
		super(props);
		
		this.onColumnReorderEndCallback = this.onColumnReorderEndCallback.bind(this);
	}
	componentWillMount(){
		if (typeof this.props.dataLoad === "function") { 
			this.props.dataLoad();
		}
	}
	onColumnReorderEndCallback(event) {
		console.log(event);
		var columnOrder = this.props.columnOrder.filter((columnKey) => {
			return columnKey !== event.reorderColumn;
		});
		if (event.columnAfter) {
			var index = columnOrder.indexOf(event.columnAfter);
			columnOrder.splice(index, 0, event.reorderColumn);
		} else {
			columnOrder.push(event.reorderColumn);
		}
		this.props.userTableColumnOrderSet(columnOrder);
	}
	sortData (data) {
		let dat = [...data];
		const { rowSortKey, rowSortDesc } = this.props;
		const multiplier = rowSortDesc ? -1 : 1;
		return dat.sort((a, b) => {
			const aVal = a[rowSortKey] || 0
			const bVal = b[rowSortKey] || 0
			return aVal > bVal ? multiplier : (aVal < bVal ? -multiplier : 0)
		});
	}
	render() {
		let { data, onEditClick, onRemoveClick, edit, columnOrder, rowSortKey, rowSortDesc, sortRowsBy, columnWidths, columnTitles } = this.props;
		let sortedData = this.sortData(data);
		let sortProps = { sortBy: sortRowsBy, sortKey: rowSortKey, sortDesc: rowSortDesc };
		let width = Object.keys(columnWidths).reduce((prevCol, key) => {
			return prevCol + columnWidths[key];
		}, 0);
		let rowHeight = 30;
		return(
				<Table
					height={data.length * rowHeight}
					rowsCount={data.length}
					onColumnReorderEndCallback={this.onColumnReorderEndCallback}
					isColumnReordering={false}
					width={width + (edit ? 100 : 0)}
					rowHeight={rowHeight}
					headerHeight={rowHeight}
					{...this.props}
				>
					{columnOrder.map(function (columnKey, i) {
						return <Column
							allowCellsRecycling={true}
							columnKey={columnKey}
							key={i}
							isReorderable={true}
							header={<SortHeaderCell {...sortProps}>{columnTitles[columnKey]}</SortHeaderCell>}
							cell={<TextCell data={sortedData} col={columnKey} />}
							width={columnWidths[columnKey]}
						/>;
					})}
					{ edit ? <Column isReorderable={false}  width={100} header="Actions"
						cell={({rowIndex, ...props}) => (
								<Cell>
									<div style={{cursor: "pointer", display:"inline"}} onClick={() => { onEditClick(sortedData[rowIndex])}}><Glyphicon glyph="pencil" /></div>
								</Cell>
							)}  
					/> : null }
				</Table>
		);
	}
};

SortableTable.defaultProps = {
    edit: false
};

SortableTable.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
	dataLoad: PropTypes.func,
	onRemoveClick: PropTypes.func.isRequired,
	onEditClick: PropTypes.func.isRequired,
	edit: PropTypes.bool.isRequired,
	columnOrder: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
	rowSortKey: PropTypes.string.isRequired,
	rowSortDesc: PropTypes.bool.isRequired,
	sortRowsBy: PropTypes.func.isRequired,
	columnTitles: PropTypes.object.isRequired,
	columnWidths: PropTypes.object.isRequired
};

export default SortableTable;