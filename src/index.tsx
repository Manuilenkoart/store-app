import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import React from 'react';
import './index.css';
import App from './App';
import { rootReducer } from './store/store';

const store = rootReducer;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
