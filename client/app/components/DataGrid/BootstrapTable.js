/* eslint max-len: 0 */
import React from "react";

import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import {Button} from "react-bootstrap";

import TooltipContainer from "../../containers/Tooltip/TooltipContainer";

class ActionFormatter extends React.Component {
    render() {
        let {dispatch, row, onLoadBackTool} = this.props;
        console.log ('CustomBootstrapTable::ActionFormatter');
        console.log(this.props);
        return (
			<TooltipContainer showTooltip={false} placement="top" tooltip="Tooltip por defecto!!" loadBackTooltip={true} onLoadBackTooltip={() => {onLoadBackTool();}}>
              <Button type="button" bsStyle="primary" onClick={() => {dispatch(row);}}>Edit User!!</Button>
            </TooltipContainer>
		);
    }
}

function actionFormatter(cell, row, formatExtraData, onLoadBackTooltipText, ...rest) {
    console.log ('CustomBootstrapTable::actionFormatter');
    console.log("onLoadBackTooltipText: " + onLoadBackTooltipText);
    console.log("formatExtraData: " + formatExtraData);
    console.log(formatExtraData);
    console.log(rest);
  return <ActionFormatter row={row} dispatch={formatExtraData.onEdit} onLoadBackTool={formatExtraData.onLoadBackTooltip} />;
} // actionFormatter
	
class CustomBootstrapTable extends React.Component {
    componentWillMount() {
        if (typeof this.props.dataLoad === "function") {
            this.props.dataLoad();
        }
    }	
	
    render() {
        let {data,columns,edit,onEditClick, onBackLoadTooltip} = this.props;
        console.log ('CustomBootstrapTable::CustomBootstrapTable');
        console.log(this.props);
        return (
			<BootstrapTable data={data} bordered={ false } >
				{columns.map(function (column, i) {
    return <TableHeaderColumn key={i} dataSort={ true } dataField={column.key} isKey={ i==0 }>{column.title}</TableHeaderColumn>;
})}
				<TableHeaderColumn dataFormat={ actionFormatter } formatExtraData={{onEdit:onEditClick,onLoadBackTooltip:onBackLoadTooltip}} hidden={ !edit }>Actions</TableHeaderColumn>
			</BootstrapTable>
		);
    }
}

export default CustomBootstrapTable;