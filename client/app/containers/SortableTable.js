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
		var reorderColumn = this.props.columns.filter((column) => {
			return column.key === event.reorderColumn;
		})[0];
		var columns = this.props.columns.filter((column) => {
			return column.key !== event.reorderColumn;
		});
		if (event.columnAfter) {
			//var index = columns.indexOf(event.columnAfter);
			var index = columns.map((column, index) => {
				if (column.key === event.columnAfter) {
					return column.key;
				}
			}).indexOf(event.columnAfter);
			columns.splice(index, 0, reorderColumn);
		} else {
			columns.push(reorderColumn);
		}
		this.props.tableColumnOrderSet(columns);
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
		let { data, onEditClick, onRemoveClick, edit, rowSortKey, rowSortDesc, sortRowsBy, columns, reorderableColumns, reorderableRows, rowHeight } = this.props;
		let sortedData = this.sortData(data);
		let sortProps = { sortBy: sortRowsBy, sortKey: rowSortKey, sortDesc: rowSortDesc };
		let width = Object.keys(columns).reduce((prevCol, key) => {
			return prevCol + columns[key].width;
		}, 0);
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
					{columns.map(function (column, i) {
						return <Column
							allowCellsRecycling={true}
							columnKey={column.key}
							key={i}
							isReorderable={reorderableColumns}
							header={reorderableRows ? <SortHeaderCell {...sortProps}>{column.title}</SortHeaderCell> : <Cell>{column.title}</Cell>}
							cell={<TextCell data={sortedData} col={column.key} />}
							width={column.width}
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
    edit: false,
	reorderableColumns: true,
	reorderableRows : true,
	rowHeight: 30
};

SortableTable.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
	dataLoad: PropTypes.func,
	onRemoveClick: PropTypes.func.isRequired,
	onEditClick: PropTypes.func.isRequired,
	tableColumnOrderSet: PropTypes.func.isRequired,
	edit: PropTypes.bool.isRequired,
	rowSortKey: PropTypes.string.isRequired,
	rowSortDesc: PropTypes.bool.isRequired,
	sortRowsBy: PropTypes.func.isRequired,
	columns: PropTypes.arrayOf(PropTypes.shape({
		key: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.number
			]).isRequired,
		title: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.number
			]).isRequired,
		width: PropTypes.number.isRequired
	}).isRequired).isRequired,
	reorderableColumns: PropTypes.bool.isRequired,
	rowHeight: PropTypes.number.isRequired
};

export default SortableTable;