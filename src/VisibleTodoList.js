import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

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

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch({
                type: 'TOGGLE_TO_DO',
                id
            })
        }
    };
};

const mapStateToProps = (state) => {
    return {
        todoList: getVisibleTodoArray(
            state.todoArray,
            state.visibilityFilter
        )
    };
}


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

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);


export default VisibleTodoList;





