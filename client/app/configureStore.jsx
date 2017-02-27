import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { todos } from './reducers/reducers.jsx';
import { loadState, saveState } from './localStorage/localStorage.jsx';
import throttle from 'lodash/throttle';
import { getVisibleTodos } from './reducers/reducers.jsx'

const todoApp = combineReducers({ todos });

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

export const getVizTodos = (state, filter) => getVisibleTodos(state.todos, filter);
