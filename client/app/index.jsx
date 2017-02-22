import React from 'react';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import { todos, vizFilter } from './reducers/reducers.jsx';
import { AddTodo } from './addTodo/addTodo.jsx';
import { Footer } from './filters/footer.jsx';
import { VisibleTodoList } from './visibleTodos/visibleTodos.jsx';
import { loadState, saveState } from './localStorage/localStorage.jsx';

const todoApp = combineReducers({ todos, vizFilter });

export const App = () => (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
)

const persistedState = loadState();
const store = createStore(todoApp, persistedState);
store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  });
});


ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>, document.getElementById('app'));
