import React from 'react';
import Main from './../Main/Main.jsx';
import Toolbar from './../Toolbar/Toolbar.jsx';
import Login from './../Login/Login.jsx';
import { Provider } from 'react-redux';
import store from './../../stores/configureStore';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Router>
            <div>
              <Toolbar />
              <hr/>
              <Route exact path="/" component={Main}/>
              <Route path="/login" component={Login}/>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}
