import React from "react";

class PageSummary extends React.Component {	

    render() {
        let firstElementOfThisPage = ((this.props.pageNumber-1) * this.props.pageSize) + 1;
        let  lastElementOfThisPage = ((this.props.pageNumber  ) * this.props.pageSize);
        let totalOfElements = this.props.totalOfElements
        return(        
                <span>{firstElementOfThisPage + "-" + lastElementOfThisPage + " of " + totalOfElements}</span>	
		);
    }
}

export default PageSummary;

