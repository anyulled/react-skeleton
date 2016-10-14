import React from "react";
import {IndexLinkContainer, LinkContainer} from "react-router-bootstrap";
import {Nav, NavDropdown,MenuItem,Navbar, NavItem, Glyphicon} from "react-bootstrap";

class Navigation extends React.Component {
	
    render() {
        return (<Navbar style={{"marginBottom":10}}>
            <Navbar.Header>
                <Navbar.Brand>
                    <a className="navbar-brand ab-logo"><span>React/Redux Starter</span></a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav activeKey={1}>
                <IndexLinkContainer to="/">
                    <NavItem eventKey={1}><Glyphicon glyph="dashboard"/> Content</NavItem>
                </IndexLinkContainer>
                <NavDropdown eventKey="4" title="Data Grids" id="nav-dropdown">
		            <LinkContainer to="/grids/bootstrap">
		                <NavItem eventKey={2}>bootstrap</NavItem>
		            </LinkContainer>
		            <LinkContainer to="/grids/fixed-data-table-2">
		                <NavItem eventKey={5}>fixed-data-table-2</NavItem>
		            </LinkContainer>
		            <LinkContainer to="/grids/responsive-fixed-data-table-2">
	                <NavItem eventKey={5}>responsive-fixed-data-table-2</NavItem>
	            </LinkContainer>
	            </NavDropdown>
                <LinkContainer to="/widgets">
                    <NavItem eventKey={3}>Widgets</NavItem>
                </LinkContainer>
                <NavDropdown eventKey="4" title="Forms" id="nav-dropdown">
                    <LinkContainer to="/forms/dynamic">
                        <NavItem eventKey={2}>dynamic</NavItem>
                    </LinkContainer>
                </NavDropdown>
            </Nav>
            <Nav pullRight>
                <LinkContainer to="/usermanager">
                    <NavItem eventKey={4}><Glyphicon glyph="cog"/> User Management</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar>);
    }
}

export default Navigation;