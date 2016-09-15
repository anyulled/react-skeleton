import React from "react";
import {LinkContainer} from "react-router-bootstrap";
import {Nav, NavItem} from "react-bootstrap";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const items = this.props.items.map(function (item) {
            return (<LinkContainer key={item.id} to={item.route}><NavItem>{item.name}</NavItem></LinkContainer>)
        });
        return (<Nav bsStyle="pills" stacked>
            {items}
        </Nav>);
    }
}

export default Sidebar;
