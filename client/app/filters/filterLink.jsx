import React from 'react';
import { Link } from './link.jsx';
import { connect } from 'react-redux';
import { setFilter } from '../actionCreators/actions.jsx';

const mapStateToFilterProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.vizFilter
  };
}

const mapDispatchToFilterProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(setFilter(ownProps.filter))
  };
}

export const FilterLink = connect(
  mapStateToFilterProps, mapDispatchToFilterProps
)(Link);
