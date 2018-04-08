import React from 'react';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';


class TodoApp extends React.Component {
    render() {
        const { store } = this.props;
        console.log(store);
        return (
            <React.Fragment>
                <AddTodo store={store} />
                <VisibleTodoList store={store} />
            </React.Fragment >
        );
    }
}
export default TodoApp;