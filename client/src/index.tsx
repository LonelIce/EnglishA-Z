import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'; // импортируем и оборачиваем приложение
import App from './App';
import store from './store';
import 'normalize.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,

    document.getElementById('root')
);
