import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";
import { connect } from 'react-redux';
import "./Toolbar.scss";

export class Toolbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.props.reducers.appReducer.loading && (
                        <div className="loading">Loading</div>
                    )
                }
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
            </div>
        );
    }
}

// Subscribe State
function select(state) {
    return {
        reducers: state
    };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Toolbar);
