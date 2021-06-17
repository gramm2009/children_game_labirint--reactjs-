import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import Router from './router/router';
import configureStore from './redux/store';
import { Provider } from 'react-redux';

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById( 'root' )
);

reportWebVitals();
