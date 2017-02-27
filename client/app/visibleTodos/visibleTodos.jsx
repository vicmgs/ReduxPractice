import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { TodoList } from './todoList.jsx'
import { toggleTodo } from '../actionCreators/actions.jsx'
import { getVizTodos } from '../configureStore.jsx'
import { fetchTodos } from '../fakeBackend.js'

export class VisibleTodoList extends Component {
  componentDidMount() {
    fetchTodos(this.props.filter).then(todos => console.log(this.props.filter, todos));
  }
  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      fetchTodos(this.props.filter).then(todos => console.log(this.props.filter, todos));
    }
  }
  render() {
    return <TodoList {...this.props} />;
  }
}

const mapStateToTodoListProps = (state, { params }) => {
  const filter = params.filter || 'all';
  return {
    todos: getVizTodos(state, filter),
    filter
  }
};

VisibleTodoList = withRouter(connect(
  mapStateToTodoListProps, { onTodoClick: toggleTodo }
)(VisibleTodoList));
