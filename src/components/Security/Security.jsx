import React, { Component } from 'react';
import {
    Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class Security extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            {
                ! this.props.loggedIn && (
                    <Redirect to='/login' />
                )
            }
            {
                this.props.loggedIn && (
                    <Redirect to='/' />
                )
            }
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Security);
