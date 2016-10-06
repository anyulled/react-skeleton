import React, {PropTypes} from "react";
import {Glyphicon} from "react-bootstrap";
import FilterBarContainer from "../../containers/DataGrid/Filter/FilterBarContainer";
import TextCell from "../../components/TextCell";
import SortHeaderCell from "../../components/SortHeaderCell";
import {Table, Column, Cell} from "fixed-data-table-2";
import "fixed-data-table-2/dist/fixed-data-table-base.css";
import "fixed-data-table-2/dist/fixed-data-table-style.css";
import "fixed-data-table-2/dist/fixed-data-table.css";
import { findDOMNode } from 'react-dom';
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';

class ResponsiveFixedDataTable2 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleOnColumnReorderEndCallback = this.handleOnColumnReorderEndCallback.bind(this);
        this.state = {
    		gridWidth: 1,
    		gridHeight: 1
        };
    }  

	shouldComponentUpdate(nextProps, nextState) {
		return !isEqual(this.props, nextProps) || !isEqual(this.state, nextState);
	}

	componentDidMount() {
		this.__isMounted = true;
		this._attachResizeEvent();
	}
	
	componentDidUpdate() {
		this._setDimensionsOnState();
    }
	
	_attachResizeEvent() {
		if (window.addEventListener) {
			window.addEventListener('resize', this._setDimensionsOnState, false);
		} else if (window.attachEvent) {
			window.attachEvent('resize', this._setDimensionsOnState);
		} else {
			window.onresize = this._setDimensionsOnState;
		}
	}

	_setDimensionsOnState = () => {
		if (this.__isMounted) {
			const { offsetWidth, offsetHeight } = findDOMNode(this);
			this.setState({
				gridWidth: offsetWidth,
				gridHeight: offsetHeight
			});
		}
	}

	_getStyle(overrides) {
		return {
			...overrides,
			width: '100%',
			height: '100%'
		};
	}
	componentWillMount() {
        if (typeof this.props.dataLoad === "function") {
            this.props.dataLoad();
        }
        
        this.__isMounted = false;
		window.removeEventListener('resize', this._setDimensionsOnState);		
		const { refreshRate } = this.props;
		this._setDimensionsOnState = debounce(this._setDimensionsOnState, refreshRate);
    }
	
	componentWillReceiveProps(props) {
		if(props.filters!=this.props.filters){
			//convert both filter lists to an easily comparable pair of strings
			let plainOldProps=this.props.filters
				.map((e)=>e.searchValue?e.key+e.searchValue+e.searchOptionValue:null)
				.filter((e)=>e!=null)
				.join();
			let plainNewProps=props.filters
				.map((e)=>e.searchValue?e.key+e.searchValue+e.searchOptionValue:null)
				.filter((e)=>e!=null)
				.join();
			if(!(plainOldProps===plainNewProps)){
				if (typeof this.props.dataLoad === "function") {
		            this.props.dataLoad(props.filters);
		        }	
			}			
		}		
	}
	
    handleOnColumnReorderEndCallback(event) {
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

    sortData(data) {
        let dat = [...data];
        const {rowSortKey, rowSortDesc} = this.props;
        const multiplier = rowSortDesc ? -1 : 1;
        return dat.sort((a, b) => {
            const aVal = a[rowSortKey] || 0;
            const bVal = b[rowSortKey] || 0;
            return aVal > bVal ? multiplier : (aVal < bVal ? -multiplier : 0);
        });
    }

    render() {
    	let {data, onEditClick, onRemoveClick, edit, rowSortKey, rowSortDesc, sortRowsBy, columns, reorderableColumns, reorderableRows, rowHeight} = this.props;
        let sortedData = this.sortData(data);        
        let sortProps = {sortBy: sortRowsBy, sortKey: rowSortKey, sortDesc: rowSortDesc};
        let width = Object.keys(columns).reduce((prevCol, key) => {
            return prevCol + columns[key].width;
        }, 0);
        let height=1;
        if(this.props && this.props.data && this.props.rowHeight && this.props.data.length){
    		height=(this.props.data.length + 1 )*this.props.rowHeight;
        }
    	const { gridWidth, gridHeight } = this.state;
            
        return (
    		<div style={{height:height,maxWidth:width}}>
    			<FilterBarContainer/> 
        		<div style={this._getStyle()}>
		            <Table
		                rowsCount={data.length}
		                onColumnReorderEndCallback={this.handleOnColumnReorderEndCallback}
		                isColumnReordering={false}
		                rowHeight={rowHeight}
		                headerHeight={rowHeight}
		                {...this.props}
		            	width={gridWidth} 
		            	height={height}
		            >
		                {columns.map(function (column, i) {
		                    return <Column
		                        allowCellsRecycling={true}
		                        columnKey={column.key}
		                        key={i}
		                        isReorderable={reorderableColumns}
		                        header={reorderableRows ? <SortHeaderCell {...sortProps}>{column.title}</SortHeaderCell> :
		                            <Cell>{column.title}</Cell>}
		                        cell={<TextCell data={sortedData} col={column.key}/>}
		                        width={column.width}
		                    />;
		                })}
		                { edit ? <Column isReorderable={false} width={100} header="Actions"
		                                 cell={({rowIndex, ...props}) => (
		                                     <Cell>
		                                         <div style={{cursor: "pointer", display: "inline"}} onClick={() => {
		                                             onEditClick(sortedData[rowIndex]);
		                                         }}><Glyphicon glyph="pencil"/></div>
		                                     </Cell>
		                                 )}
		                /> : null }
		            </Table>
	            </div>
            </div>
        );
    }
}

ResponsiveFixedDataTable2.defaultProps = {
	edit: false,
	refreshRate: 250, // ms
    reorderableColumns: true,
    reorderableRows: true,
    rowHeight: 30
};

ResponsiveFixedDataTable2.propTypes = {
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
	data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    dataLoad: PropTypes.func,
    edit: PropTypes.bool.isRequired,
    refreshRate: React.PropTypes.number,
	reorderableColumns: PropTypes.bool.isRequired,
    rowHeight: PropTypes.number.isRequired,
    rowSortDesc: PropTypes.bool.isRequired,
    rowSortKey: PropTypes.string.isRequired,
    sortRowsBy: PropTypes.func.isRequired,
    tableColumnOrderSet: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired
};

export default ResponsiveFixedDataTable2;