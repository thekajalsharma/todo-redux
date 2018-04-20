import { v4 } from 'node-uuid';

export const addTodo = (text) => ({
    type: 'ADD_TO_DO',
    id: v4(),
    text
});


export const toggleTodo = (id) => ({
    type: 'TOGGLE_TO_DO',
    id
});

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
});
