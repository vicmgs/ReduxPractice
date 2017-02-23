import React from 'react';
import { Link } from 'react-router';

const FilterLink = ({ filter, children }) => (
  <Link
    to={filter === 'all' ? '' : filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </Link>
);

export default FilterLink;

{/*

import React from 'react';
import { Link } from './link.jsx';
import { connect } from 'react-redux';
import { setFilter } from '../actionCreators/actions.jsx';

const mapStateToFilterProps = (state, ownProps) => ({
    active: ownProps.filter === state.vizFilter
});

const mapDispatchToFilterProps = (dispatch, ownProps) => ({
    onClick() {
      dispatch(setFilter(ownProps.filter))
    }
});

export const FilterLink = connect(
  mapStateToFilterProps, mapDispatchToFilterProps
)(Link);

*/}
