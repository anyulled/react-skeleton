/* eslint max-len: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class ActionFormatter extends React.Component {
	render() {
		let {dispatch,row} = this.props;
		return (
			<button className='btn btn-primary' onClick={() => {dispatch(row);}}>Edit</button>
		);
	}
}

function actionFormatter(cell, row, formatExtraData) {
	return <ActionFormatter row={row} dispatch={formatExtraData}/>;
}
	
class CustomBootstrapTable extends React.Component {
	componentWillMount() {
		if (typeof this.props.dataLoad === "function") {
			this.props.dataLoad();
		}
	}	
	
	render() {
		let {data,columns,edit,onEditClick} = this.props;
		return (
			<BootstrapTable data={data} bordered={ false } >
				{columns.map(function (column, i) {
	                return <TableHeaderColumn key={i} dataSort={ true } dataField={column.key} isKey={ i==0 }>{column.title}</TableHeaderColumn>
	            })}
				<TableHeaderColumn dataFormat={ actionFormatter } formatExtraData={onEditClick} hidden={ !edit }>Actions</TableHeaderColumn>
			</BootstrapTable>
		);
	}
}

export default CustomBootstrapTable;