import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { BrowserRouter } from 'react-router-dom';
import Router from './router/router';
import configureStore from './redux/store';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>,

    document.getElementById('root')
);
