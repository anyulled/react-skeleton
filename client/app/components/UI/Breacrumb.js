import React from "react"
import {LinkContainer} from "react-router-bootstrap"
import {Nav, NavItem} from "react-bootstrap"

class Breacrumb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "title": "Deals Overview",
            "breadcrumbs": [
                {"id": "2", "active": false, "route": "/deals", "name": "Deals"},
                {"id": "3", "active": false, "route": "/deals/" + this.props.id + "/client", "name": "Client"}
            ]
        };
    }

    render() {
        const breadcrumbItems = this.state.breadcrumbs.map(function (crumb) {
            return (
                <LinkContainer to={crumb.route} key={crumb.id}>
                    <NavItem href={crumb.route} active={crumb.active} eventKey={crumb.id}>{crumb.name}</NavItem>
                </LinkContainer>
            );
        });
        return (<div className="page-header-block">
            <Nav bsStyle="pills">
                <li className="current-page-title">{this.state.title}</li>
                {breadcrumbItems}
            </Nav></div>);
    }
}

export default Breacrumb;
