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

export const reducerTodoArray = (state = [], action) => {
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