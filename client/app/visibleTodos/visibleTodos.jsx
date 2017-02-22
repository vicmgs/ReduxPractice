import React from 'react';
import { connect } from 'react-redux';
import { TodoList } from './todoList.jsx'
import { toggleTodo } from '../actionCreators/actions.jsx'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
}

const mapStateToTodoListProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.vizFilter)
});

const mapDispatchToTodoListProps = (dispatch) => ({
  onTodoClick: (id) => { dispatch(toggleTodo(id)) }
});

export const VisibleTodoList = connect(
  mapStateToTodoListProps, mapDispatchToTodoListProps
)(TodoList);
