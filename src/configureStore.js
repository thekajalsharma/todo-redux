import { createStore } from 'redux';
import { reducerTodoApp } from './reducers/reducerTodoApp';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const configureStore = () => {
    const persistedState = loadState();
    const store = createStore(reducerTodoApp, persistedState);

    store.subscribe(throttle(() => {
        saveState({
            todoArray: store.getState().todoArray
        });
    }, 1000));
    return store;
};
export default configureStore;