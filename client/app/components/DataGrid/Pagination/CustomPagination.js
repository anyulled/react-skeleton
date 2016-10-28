import React from "react";

import { Pagination } from "react-bootstrap";

import PageSummary from "../../../containers/DataGrid/Pagination/PageSummaryContainer";

class CustomPagination extends React.Component {	

    constructor(props) {
        super(props);
        this.handleSelectPage = this.handleSelectPage.bind(this);
    }  
    
    handleSelectPage(event) {
        this.props.changePage(this.props.tableName, event);
    }
	
    render() {
        console.log(this.props);
        let firstElementOfThisPage = ((this.props.pageNumber-1) * this.props.pageSize) + 1;
        let  lastElementOfThisPage = ((this.props.pageNumber  ) * this.props.pageSize);
        let totalOfElements = this.props.totalOfElements
        return(
            <div>
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
                <PageSummary {...this.props}/>
            </div>
		);
    }
}

export default CustomPagination;

