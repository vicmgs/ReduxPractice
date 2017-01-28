import React from 'react';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { todos, vizFilter } from '../app/reducers/reducers.jsx';

import { Provider } from 'react-redux';
import { VisibleTodoList } from '../app/visibleTodos/visibleTodos.jsx';
import { TodoList } from '../app/visibleTodos/todoList.jsx';
import { Todo } from '../app/visibleTodos/todos.jsx';

describe('Visible Todos', () => {
  const todoApp = combineReducers({ todos, vizFilter });
  const store = createStore(todoApp)
  const wrapper = mount(<Provider store={store} >
    <VisibleTodoList />
  </Provider>);

  it('works?', () => {
    expect(wrapper.find(TodoList)).to.have.length(1);
  });

  it('works?', () => {
    expect(wrapper.find(TodoList).at(0).props().todos).to.eql([]);
    expect(wrapper.find(TodoList).at(0).props().onTodoClick).to.exist;
    expect(wrapper.find(TodoList).at(0).props().todos.length).to.eql(0);
    store.dispatch({type: 'ADD', id: 1, text:'test'});
    expect(wrapper.find(TodoList).at(0).props().todos[0].completed).to.eql(false);
    wrapper.find(TodoList).at(0).props().onTodoClick(1);
    expect(wrapper.find(TodoList).at(0).props().todos[0].completed).to.eql(true);
  });
});
