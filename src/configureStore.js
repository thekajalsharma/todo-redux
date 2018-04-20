import { createStore } from 'redux';
import { reducerTodoApp } from './reducers/reducerTodoApp';

const store = createStore(reducerTodoApp);

export default store;