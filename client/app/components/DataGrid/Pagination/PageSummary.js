import React from "react";

class PageSummary extends React.Component {

    render() {
        let firstElementOfThisPage = ((this.props.pageNumber - 1) * this.props.pageSize) + 1;
        let lastElementOfThisPage = ((this.props.pageNumber  ) * this.props.pageSize);
        let numberOfElements = this.props.numberOfElements;
        firstElementOfThisPage = ( firstElementOfThisPage <= numberOfElements) ? firstElementOfThisPage : numberOfElements;
        lastElementOfThisPage = (  lastElementOfThisPage < numberOfElements) ? lastElementOfThisPage : numberOfElements;
        return (
            <span>{firstElementOfThisPage + "-" + lastElementOfThisPage + " of " + numberOfElements}</span>
        );
    }
}

export default PageSummary;

