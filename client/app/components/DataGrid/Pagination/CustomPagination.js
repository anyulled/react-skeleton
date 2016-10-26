import React from "react";

import { Pagination } from "react-bootstrap";

class CustomPagination extends React.Component {	

    constructor(props) {
        super(props);
        this.handleSelectPage = this.handleSelectPage.bind(this);
    }  
    
    handleSelectPage(event) {
        this.props.changePage(this.props.tableName, event);
    }
	
    render() {
        return(
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
		);
    }
}

export default CustomPagination;

