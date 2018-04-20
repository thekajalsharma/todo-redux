import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp';
import store from './configureStore';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider >,
    document.getElementById('root'));