import React from 'react';
import {
    Link
} from 'react-router-dom';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap"

export default class Toolbar extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React-Bootstrap</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} componentClass={Link} href="/login" to="/login">Login</NavItem>
                </Nav>
            </Navbar>
        );
    }
}
