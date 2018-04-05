// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import deepFreeze from 'deepfreeze';
import expect from 'expect';

const reducerTodo = (todo, action) => {
    switch (action.type) {
        case 'ADD_TO_DO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case 'TOGGLE_TO_DO':
            if (action.id === todo.id)
                return { ...todo, completed: !todo.completed };
            else
                return todo;
        default:
            return todo;
    }
};

const reducerTodoList = (state = [], action) => {
    console.log("In reducerTodoList");
    switch (action.type) {
        case 'ADD_TO_DO':
            return [...state, reducerTodo(undefined, action)];
        case 'TOGGLE_TO_DO':
            return state.map((todo) => {
                return reducerTodo(todo, action);
            });
        default:
            return state;
    }
};

const testToggleTodo = () => {
    const todoBefore = [{
        id: 0,
        text: 'First Todo',
        completed: false
    }];
    const todoAfter = [{
        id: 0,
        text: 'First Todo',
        completed: true
    }]
    const action = {
        type: 'TOGGLE_TO_DO',
        text: 'First Todo',
        id: 0
    }
    deepFreeze(todoBefore);
    console.log("Calling Toggle");
    expect(
        reducerTodoList(todoBefore, action)
    ).toEqual(todoAfter);
};

const testAddTODO = () => {
    const stateBefore = [];
    const action = {
        type: 'ADD_TO_DO',
        text: 'First Todo',
        id: 0
    }
    const stateAfter = [{
        id: 0,
        text: 'First Todo',
        completed: false
    }]
    console.log("Calling Add");

    expect(
        reducerTodoList(stateBefore, action)
    ).toEqual(stateAfter);
};

testAddTODO();
testToggleTodo();
console.log('All tests passed');
//ReactDOM.render(<App />, document.getElementById('root'));