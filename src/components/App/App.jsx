import React, { Component } from 'react';
import Dashboard from '../Dashboard/Dashboard.jsx';
import Customers from '../Customers/Customers.jsx';
import Login from './../Login/Login.jsx';
import Security from './../Security/Security.jsx';
import Users from './../Users/Users.jsx';
import Loading from './../Loading/Loading.jsx';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class App extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path="/" component={Dashboard}/>
                        <Route exact path="/customers" component={Customers}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/users" component={Users}/>
                        <Security/>
                        {
                            this.props.loading && (
                                <Loading/>
                            )
                        }
                    </div>
                </Router>
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
