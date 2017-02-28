import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { TodoList } from './todoList.jsx'
import * as actions from '../actionCreators/actions.jsx'
import { getVizTodos } from '../configureStore.jsx'
import { fetchTodos } from '../fakeBackend.js'

export class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }
  fetchData() {
    const { filter, receiveTodos } = this.props;
    fetchTodos(filter).then(todos =>
      receiveTodos(filter, todos)
    );
  }
  render() {
    const { toggleTodo, ...rest } = this.props;
    return <TodoList {...rest} onTodoClick={toggleTodo} />;
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
  mapStateToTodoListProps, actions
)(VisibleTodoList));
