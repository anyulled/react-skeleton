/* eslint max-len: 0 */
import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import {Button} from "react-bootstrap";

import TooltipContainer from "../../containers/Tooltip/TooltipContainer";

class ActionFormatter extends React.Component {
  render() {
    console.log ('CustomBootstrapTable::ActionFormatter');
    let {dispatch, row, onLoadBackTool, tooltip, colorType} = this.props;
    return (
      <TooltipContainer showTooltip={false}
                        placement="right"
                        tooltip={tooltip}
                        colorType={colorType}
                        loadBackTooltip={true}
                        onLoadBackTooltip={() => {onLoadBackTool();}}>
        <Button type="button" bsStyle="primary" onClick={() => {dispatch(row);}}>Edit</Button>
      </TooltipContainer>
    );
  }
} // ActionFormatter

function actionFormatter(cell, row, formatExtraData) {
  console.log ('CustomBootstrapTable::actionFormatter');
  return <ActionFormatter row={row}
                          dispatch={formatExtraData.onEdit}
                          onLoadBackTool={formatExtraData.onLoadBackTooltip}
                          tooltip={formatExtraData.tooltip}
                          colorType={formatExtraData.colorType}
         />;
} // actionFormatter
	
class CustomBootstrapTable extends React.Component {
  componentWillMount() {
    if (typeof this.props.dataLoad === "function") {
      this.props.dataLoad();
    }
  }	
  render() {
    console.log ('CustomBootstrapTable::CustomBootstrapTable');
    let {data, columns, edit, onEditClick, onBackLoadTooltip, tooltip, colorType} = this.props;
    return (
      <BootstrapTable data={data} bordered={false}>
		{columns.map(function (column, i) {
          return (<TableHeaderColumn key={i} dataSort={ true } dataField={column.key} isKey={ i==0 }>
                      <TooltipContainer showTooltip={false}
                                        placement="top"
                                        tooltip={column.title}
                                        colorType="success"
                                        loadBackTooltip={false}>
                          <span>{column.title}</span>
                      </TooltipContainer>
                  </TableHeaderColumn>);
        })}
        <TableHeaderColumn dataFormat={ actionFormatter }
                           formatExtraData={{onEdit: onEditClick, onLoadBackTooltip: onBackLoadTooltip, tooltip: tooltip, colorType: colorType} }
                           hidden={ !edit }>
            <TooltipContainer showTooltip={false}
                              placement="top"
                              tooltip="Actions"
                              colorType="success"
                              loadBackTooltip={false}>
                <span>Actions</span>
            </TooltipContainer>
        </TableHeaderColumn>
      </BootstrapTable>
    );
  }
} // CustomBootstrapTable

export default CustomBootstrapTable;
