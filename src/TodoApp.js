import React from 'react';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import Footer from './Footer';

const TodoApp = ({ store }) => {
    console.log(store);
    return (
        <React.Fragment>
            <AddTodo store={store} />
            <VisibleTodoList store={store} />
            <Footer store={store} />
        </React.Fragment >
    );

}
export default TodoApp;