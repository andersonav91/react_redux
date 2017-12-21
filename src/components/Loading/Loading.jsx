import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import "./Loading.scss";

export class Loading extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="loading">Loading</div>
    );
  }
}

// Subscribe State
function mapStateToProps(state) {
    return {};
}

const actionCreators = {
};

// actionCreators
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Loading);
