import React from 'react';
import { Link } from './link.jsx';
import { connect } from 'react-redux';

const mapStateToFilterProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.vizFilter
  };
}

const mapDispatchToFilterProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch({
      type: 'SET_FILTER',
      filter: ownProps.filter
    })
  };
}

export const FilterLink = connect(
  mapStateToFilterProps, mapDispatchToFilterProps
)(Link);
