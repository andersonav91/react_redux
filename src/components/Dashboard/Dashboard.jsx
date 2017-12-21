import React from 'react';
import Toolbar from './../Toolbar/Toolbar.jsx';
import { Col } from "react-bootstrap";

export default class Dashboard extends React.Component {
  render() {
    return (
    <div>
        <Col xs={6} md={2}>
            <Toolbar/>
        </Col>
        <Col xs={12} md={10}>
            Dashboard
        </Col>
    </div>
    );
  }
}
