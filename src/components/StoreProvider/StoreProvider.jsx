import React from 'react';
import App from './../App/App.jsx';
import { Provider } from 'react-redux';
import store from './../../stores/configureStore';

export default class ProviderStore extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <App/>
      </Provider>
    );
  }
}
