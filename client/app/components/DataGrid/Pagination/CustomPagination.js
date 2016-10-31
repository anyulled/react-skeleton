import React from "react";

import { Pagination } from "react-bootstrap";
import { Grid,Row,Col } from "react-bootstrap";
import { DropdownButton,MenuItem } from "react-bootstrap";

import PageSummary from "../../../containers/DataGrid/Pagination/PageSummaryContainer";

class CustomPagination extends React.Component {	

    constructor(props) {
        super(props);
        this.handleSelectPage = this.handleSelectPage.bind(this);
        this.handleSelectPageSize = this.handleSelectPageSize.bind(this);
    }  
    
    handleSelectPage(event) {
        this.props.changePage(this.props.tableName, event);
    }

    handleSelectPageSize(event) {
        this.props.changePageSize(this.props.tableName, event);
    }
	
    render() {
        let firstElementOfThisPage = ((this.props.pageNumber-1) * this.props.pageSize) + 1;
        let  lastElementOfThisPage = ((this.props.pageNumber  ) * this.props.pageSize);
        let totalOfElements = this.props.totalOfElements
        return(
            <div style={{width:100+"%","backgroundImage":"linear-gradient(#fff,#efefef)","border": "1px solid #d3d3d3","padding":"7px 2px 3px"}}>
                <Grid fluid>
                    <Row>
                        <Col xs={7} sm={8} style={{"paddingLeft":"3px"}}>
                            <Pagination
                                prev
                                next
                                first
                                last
                                ellipsis
                                boundaryLinks
                                maxButtons={this.props.maxButtons}
                                items={this.props.numberOfPages}
                                activePage={this.props.pageNumber}
                                onSelect={this.handleSelectPage}
                            />
                        </Col>
                        <Col xs={2} sm={2} style={{"borderLeft":"1px solid rgb(211, 211, 211)","minHeight":"50px","padding":"13px 2px 2px 14px"}}>
                            <div style={{"margin":"1px 0px"}}>
                                <DropdownButton title="Page Size" id="select-page-size-dropdown" onSelect={this.handleSelectPageSize}>
                                    <MenuItem eventKey={5}>5</MenuItem>
                                    <MenuItem eventKey={10}>10</MenuItem>
                                    <MenuItem eventKey={13}>13</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={50}>50</MenuItem>
                                    <MenuItem eventKey={100}>100</MenuItem>
                                </DropdownButton>
                            </div>
                        </Col>
                        <Col xs={3} sm={2} style={{"borderLeft":"1px solid rgb(211, 211, 211)","minHeight":"50px","padding":"13px 2px 2px 14px"}}>
                            <div style={{"border":"1px solid #d3d3d3","padding":"5px 2px","margin":"1px 0px","borderRadius":"3px","borderColor":"rgb(209,217,222)","color":"#1d769f"}}>
                                <PageSummary {...this.props}/>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
		);
    }
}

export default CustomPagination;

