import React from 'react';
import Todo from './Todo';

class VisibleTodoList extends React.Component {

    componentDidMount() {
        const { store } = this.props;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    getVisibleTodoArray = (todoArray, visibilityFilter) => {
        switch (visibilityFilter) {
            case 'SHOW_COMPLETED':
                const visibleArray = todoArray.map((todo) => {
                    if (todo.completed)
                        return todo;
                });
            case 'ACTIVE':
            case 'ALL':
            default:
                return todoArray;
        }
        // const visibleTodoArray = [{ id: 0, text: "One", completed: false }];
        // return visibleTodoArray;
    }

    render() {
        const { store } = this.props;
        const todoList = this.getVisibleTodoArray(store.getState().todoArray, store.getState().visibilityFilter);
        console.log("TODOList");
        console.log(todoList);
        return (
            <ul>
                {todoList.map((todo) =>
                    <Todo
                        key={todo.id}
                        onClick={() => store.dispatch({
                            type: 'TOGGLE_TO_DO',
                            id: todo.id
                        })}
                        completed={todo.completed}
                        text={todo.text} />
                )}
            </ul>
        );
    }

}
export default VisibleTodoList;