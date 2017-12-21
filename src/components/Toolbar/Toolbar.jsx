import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";
import { connect } from 'react-redux';
import "./Toolbar.scss";
import { bindActionCreators } from 'redux';

export class Toolbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.props.loading && (
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
function mapStateToProps(state) {
    return {
        loading: state.appReducer.loading
    };
}

const actionCreators = {
};

// actionCreators
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);

