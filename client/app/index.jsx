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

const App = () => (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
)

ReactDOM.render(
  <Provider store={createStore(todoApp)} >
    <App />
  </Provider>, document.getElementById('app'));
