import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from "redux-devtools-extension";

import './index.css';
import App from './App';

const rootReducer = combineReducers({
  form: formReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools()
  // other store enhancers if any
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

