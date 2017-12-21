import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import "./Toolbar.scss"
import {
    Link
} from 'react-router-dom';

export class Toolbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        var FaDashboard = require('react-icons/lib/fa/dashboard');
        var FaUser = require('react-icons/lib/fa/user');
        var FaGroup = require('react-icons/lib/fa/group');
        var FaEnvelope = require('react-icons/lib/fa/envelope');
        return (
            <ul className="nav navbar-nav navbar-left menu">
                <li>
                    <Link to="/dashboard" href="/dashboard"><p className="title_menu"><FaDashboard /> Tablero</p></Link>
                </li>
                <li>
                    <Link to="/customers" href="/customers"><p className="title_menu"><FaUser /> Clientes</p></Link>
                </li>

            </ul>
        );
    }
}

// Subscribe State
function mapStateToProps(state) {
    return {
        loggedIn: state.userReducer.loggedIn
    };
}

const actionCreators = {
};

// actionCreators
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);

