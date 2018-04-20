let nextTodoId = 2;
export const addTodo = (text) => ({
    type: 'ADD_TO_DO',
    id: nextTodoId++,
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
