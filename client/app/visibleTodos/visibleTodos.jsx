import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { TodoList } from './todoList.jsx'
import * as actions from '../actionCreators/actions.jsx'
import { getVizTodos } from '../configureStore.jsx'
import {createSelector} from 'reselect'

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
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
  }
  render() {
    const { toggleTodo, ...rest } = this.props;
    return <TodoList {...rest} onTodoClick={toggleTodo} />;
  }
}

const data = createSelector(
  state => state,
  params => params.filter,
  (state, filter) => {
    filter = filter || 'all';
    return {
      todos: getVizTodos(state, filter),
      filter
    }
  }
)

const mapStateToTodoListProps = (state, { params }) => {
  return data(state, { params })
};

VisibleTodoList = withRouter(connect(
  mapStateToTodoListProps, actions
)(VisibleTodoList));
