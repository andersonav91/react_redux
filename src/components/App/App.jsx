import React, { Component } from 'react';
import Main from './../Main/Main.jsx';
import Login from './../Login/Login.jsx';
import Security from './../Security/Security.jsx';
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
                        <Route exact path="/" component={Main}/>
                        <Route path="/login" component={Login}/>
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
