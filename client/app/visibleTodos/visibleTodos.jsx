import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { TodoList } from './todoList.jsx'
import { toggleTodo } from '../actionCreators/actions.jsx'
import { getVizTodos } from '../configureStore.jsx'

const mapStateToTodoListProps = (state, { params }) => {
  console.log(state);
  return {
    todos: getVizTodos(state, params.filter || 'all')
  }
};

export const VisibleTodoList = withRouter(connect(
  mapStateToTodoListProps, { onTodoClick: toggleTodo }
)(TodoList));
