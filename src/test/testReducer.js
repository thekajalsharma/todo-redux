import deepFreeze from 'deepfreeze';
import expect from 'expect';
import store from './configureStore';

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