import React from "react";
import {LinkContainer} from "react-router-bootstrap";
import {Nav, Navbar, NavItem, Glyphicon} from "react-bootstrap";

class DbNavigation extends React.Component {
    render() {
        return (<Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a className="navbar-brand ab-logo"><span>DB Skeleton</span></a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <LinkContainer to="/dashboard">
                    <NavItem><Glyphicon glyph="dashboard"/> Dashboard</NavItem>
                </LinkContainer>
                <LinkContainer to="/system">
                    <NavItem><Glyphicon glyph="cog"/> System</NavItem>
                </LinkContainer>
                <LinkContainer to='/option1'>
                    <NavItem eventKey={1}>Option 1</NavItem>
                </LinkContainer>
                <LinkContainer to="/option2">
                    <NavItem eventKey={2}>Option 2</NavItem>
                </LinkContainer>
            </Nav>
            <Nav pullRight>
                <LinkContainer to="/user">
                    <NavItem eventKey={2}>User Menu</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar>);
    }
}

export default DbNavigation;