import React from "react";

class PageSummary extends React.Component {	

    render() {
        console.log(this.props);
        let firstElementOfThisPage = ((this.props.pageNumber-1) * this.props.pageSize) + 1;
        let  lastElementOfThisPage = ((this.props.pageNumber  ) * this.props.pageSize);
        let totalOfElements = this.props.totalOfElements
        return(
            <div>
                <span>{firstElementOfThisPage + "-" + lastElementOfThisPage + " of " + totalOfElements}</span>	
            </div>
		);
    }
}

export default PageSummary;

