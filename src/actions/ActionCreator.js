let nextTodoId = 2;
export const addTodo = (text) => {
    return {
        type: 'ADD_TO_DO',
        id: nextTodoId++,
        text
    };
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TO_DO',
        id
    };
};

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter: filter
    };
};