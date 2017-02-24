import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { TodoList } from './todoList.jsx'
import { toggleTodo } from '../actionCreators/actions.jsx'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(t => t.completed);
    case 'active':
      return todos.filter(t => !t.completed);
  }
}

const mapStateToTodoListProps = (state, { params }) => ({
  todos: getVisibleTodos(state.todos, params.filter || 'all')
});

const mapDispatchToTodoListProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id))
  }
});

export const VisibleTodoList = withRouter(connect(
  mapStateToTodoListProps, mapDispatchToTodoListProps
)(TodoList));
