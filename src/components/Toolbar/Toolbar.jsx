import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import "./Toolbar.scss";

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
                <li><a id="dashboard" href="#" appentrypoint="true" role="pageLink" data-page="dashboard" className="active"><span data-page="dashboard" aria-hidden="true"></span><p className="title_menu"><FaDashboard /> Tablero</p></a></li>
                <li><a id="client" href="#" role="entityLink" data-entity="client"><span data-entity="client" aria-hidden="true"></span><p className="title_menu"><FaUser /> Clientes</p></a></li>
                <li><a id="user" href="#" role="entityLink" data-entity="user"><span aria-hidden="true" data-entity="user"></span><p className="title_menu"><FaUser /> Usuarios</p></a></li>
                <li><a id="sms_group" href="#" role="entityLink" data-entity="sms_group"><span aria-hidden="true" data-entity="sms_group"></span><p className="title_menu"><FaGroup /> Grupos</p></a></li>
                <li><a id="member" href="#" role="entityLink" data-entity="member"><span data-entity="member" aria-hidden="true"></span><p className="title_menu"><FaUser /> Miembros</p></a></li>
                <li><a id="parent_campaign" href="#" role="entityLink" data-entity="parent_campaign"><span data-entity="parent_campaign" aria-hidden="true"></span><p className="title_menu"><FaEnvelope /> Campañas</p></a></li>
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

