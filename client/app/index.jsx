import React from 'react';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import { todos, vizFilter } from './reducers/reducers.jsx';
import { AddTodo } from './addTodo/addTodo.jsx';
import { Footer } from './filters/footer.jsx';
import { VisibleTodoList } from './visibleTodos/visibleTodos.jsx';

const todoApp = combineReducers({ todos, vizFilter });

export const App = () => (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
)

const persistedState = {
  todos: [{
    id: 0,
    text: 'Welcome Back',
    completed: false
  }],
  vizFilter: 'SHOW_ACTIVE'
}
const store = createStore(todoApp, persistedState);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>, document.getElementById('app'));
