// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import { combineReducers, createStore } from 'redux';
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

const reducerTodoArray = (state = [], action) => {
    console.log("In reducerTodoArray");
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

const reducerVisibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

const reducerTodoApp = (state = {}, action) => {
    return {
        todoArray: reducerTodoArray(state.todoArray, action),
        visibilityFilter: reducerVisibilityFilter(state.visibilityFilter, action)
    };
};


const store = createStore(reducerTodoApp);
console.log('Initial state');
console.log(store.getState());
console.log('----------------');

console.log('Dispatching ADD_TO_DO');
store.dispatch({
    type: 'ADD_TO_DO',
    id: 0,
    text: 'First Todo Learning Redux'
});

console.log('Current State');
console.log(store.getState());
console.log('-------------------');


console.log('Dispatching ADD_TO_DO');
store.dispatch({
    type: 'ADD_TO_DO',
    id: 1,
    text: 'Second Todo Learning Redux'
});

console.log('Current State');
console.log(store.getState());
console.log('-------------------');

console.log('Dispatching TOGGLE_TO_DO');
store.dispatch({
    type: 'TOGGLE_TO_DO',
    id: 0
});

console.log('Current State');
console.log(store.getState());
console.log('-------------------');

console.log('Dispatching TOGGLE_TO_DO');
store.dispatch({
    type: 'TOGGLE_TO_DO',
    id: 0
});

console.log('Current State');
console.log(store.getState());
console.log('-------------------');

console.log('Dispatching SET_VISIBILITY FILTER');
store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED'
});

console.log('Current State');
console.log(store.getState());

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
        reducerTodoArray(todoBefore, action)
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
        reducerTodoArray(stateBefore, action)
    ).toEqual(stateAfter);
};

testAddTODO();
testToggleTodo();
console.log('All tests passed');
//ReactDOM.render(<App />, document.getElementById('root'));