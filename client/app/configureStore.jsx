import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import logger from 'redux-logger';
import { combineReducers } from 'redux';
import { todos } from './reducers/reducers.jsx';
import { getVisibleTodos } from './reducers/reducers.jsx'

const todoApp = combineReducers({ todos });

const configureStore = () => {
  const middlewares = [promise];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger())
  }

  return createStore(
    todoApp,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;

export const getVizTodos = (state, filter) => getVisibleTodos(state.todos, filter);
