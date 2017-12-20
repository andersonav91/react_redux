import React, { Component } from 'react';
import {
    Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

export class Security extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            {
                ! this.props.reducers.userReducer.loggedIn && (
                    <Redirect to='/login' />
                )
            }
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
export default connect(select)(Security);