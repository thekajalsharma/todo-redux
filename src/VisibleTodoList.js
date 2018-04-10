import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

class VisibleTodoList extends React.Component {

    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    getVisibleTodoArray = (todoArray, visibilityFilter) => {
        //  return todoArray;
        console.log("**************");
        const { store } = this.context;
        switch (visibilityFilter) {
            case 'SHOW_ALL':
                console.log("In Show all ");
                console.log(store.getState());
                return todoArray;
            case 'SHOW_COMPLETED':
                console.log("In Show completed ");
                console.log(store.getState());
                const visibleArray = todoArray.filter((todo) => todo.completed);
                console.log("Visible Array");
                console.log(visibleArray);
                return visibleArray;
            case 'SHOW_ACTIVE':
                console.log("In Show active");
                return todoArray.filter((todo) => !todo.completed);
        }
        // const visibleTodoArray = [{ id: 0, text: "One", completed: false }];
        // return visibleTodoArray;
    }

    render() {
        const { store } = this.context;
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
VisibleTodoList.contextTypes = {
    store: PropTypes.object
}
export default VisibleTodoList;