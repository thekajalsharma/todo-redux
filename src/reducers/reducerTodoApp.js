import { combineReducers } from 'redux';
import { reducerTodoArray } from './reducerTodoArray';
import { reducerVisibilityFilter } from './reducerVisibilityFilter';

// const reducerTodoApp = (state = {}, action) => {
//     return {
//         todoArray: reducerTodoArray(state.todoArray, action),
//         visibilityFilter: reducerVisibilityFilter(state.visibilityFilter, action)
//     };
// };

export const reducerTodoApp = combineReducers({
    todoArray: reducerTodoArray,
    visibilityFilter: reducerVisibilityFilter
})