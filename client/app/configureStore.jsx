import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { todos, vizFilter } from './reducers/reducers.jsx';
import { loadState, saveState } from './localStorage/localStorage.jsx';
import throttle from 'lodash/throttle';

const todoApp = combineReducers({ todos, vizFilter });

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(todoApp, persistedState);
  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    });
  }, 1000));

  return store;
}

export default configureStore;
