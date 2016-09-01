import React from "react";
import {LinkContainer} from "react-router-bootstrap";
import {Nav, NavItem} from "react-bootstrap";

class DbSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {"id": "1", "name": "Client", "route": "/"},
                {"id": "2", "name": "Obligor", "route": "/link2"},
                {"id": "3", "name": "Details", "route": "/link3"}
            ]
        };
    }

    render() {
        const items = this.state.items.map(function (item) {
            return (<LinkContainer key={item.id} to={item.route}><NavItem>{item.name}</NavItem></LinkContainer>)
        });
        return (<Nav bsStyle="pills" stacked>
            {items}
        </Nav>);
    }
}

export default DbSidebar;
