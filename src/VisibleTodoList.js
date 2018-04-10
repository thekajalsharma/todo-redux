import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const getVisibleTodoArray = (todoArray, visibilityFilter) => {
    switch (visibilityFilter) {
        case 'SHOW_ALL':
            return todoArray;
        case 'SHOW_COMPLETED':
            return todoArray.filter((todo) => todo.completed);
        case 'SHOW_ACTIVE':
            return todoArray.filter((todo) => !todo.completed);
    }
}

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

    render() {
        const { store } = this.context;

        return (
            <TodoList
                todoList={getVisibleTodoArray(store.getState().todoArray, store.getState().visibilityFilter)}
                onTodoClick={(id) => store.dispatch({
                    type: 'TOGGLE_TO_DO',
                    id
                })} />
        );
    }
    mapDispatchToProps = (dispatch) => {
        return {
            onClick: (id) => {
                dispatch({
                    type: 'TOGGLE_TODO',
                    id
                })
            }
        };
    };

    mapStateToProps = (state) => {
        return {
            todoList: getVisibleTodoArray(
                state.todoArray,
                state.visibilityFilter
            )
        };
    }
}
VisibleTodoList.contextTypes = {
    store: PropTypes.object
}
export default VisibleTodoList;

const TodoList = ({ todoList, onTodoClick }) => {
    return (
        <ul>
            {todoList.map((todo) =>
                <Todo
                    key={todo.id}
                    onClick={() => onTodoClick(todo.id)}
                    completed={todo.completed}
                    text={todo.text} />
            )}
        </ul>);
}