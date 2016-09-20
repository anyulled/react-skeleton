import React from "react";
import {IndexLinkContainer, LinkContainer} from "react-router-bootstrap";
import {Nav, Navbar, NavItem, Glyphicon} from "react-bootstrap";

class Navigation extends React.Component {
	
    render() {
        return (<Navbar style={{'margin-bottom':10}}>
            <Navbar.Header>
                <Navbar.Brand>
                    <a className="navbar-brand ab-logo"><span>React/Redux Starter</span></a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav activeKey={1}>
                <IndexLinkContainer to="/">
                    <NavItem eventKey={1}><Glyphicon glyph="dashboard"/> Home</NavItem>
                </IndexLinkContainer>
                <LinkContainer to="/usermanager">
                    <NavItem eventKey={2}><Glyphicon glyph="cog"/> User Management</NavItem>
                </LinkContainer>
                <LinkContainer to="/widgets">
                    <NavItem eventKey={3}>Widgets</NavItem>
                </LinkContainer>
            </Nav>
            <Nav pullRight>
                <LinkContainer to="/users">
                    <NavItem eventKey={4}>User List</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar>);
    }
}

export default Navigation;