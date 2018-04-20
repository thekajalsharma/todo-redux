import { Provider } from 'react-redux';
import TodoApp from './TodoApp';
import React from 'react';

const Root = ({ store }) => (
    <Provider store={store}>
        <TodoApp />
    </Provider >
);

export default Root;