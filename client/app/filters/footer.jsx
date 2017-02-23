import React from 'react';
import FilterLink from './filterLink.jsx';

export const Footer = () => (
  <p>Show:
    {' '}
    <FilterLink filter ='all'>All</FilterLink>
    {', '}
    <FilterLink filter ='active'>Active</FilterLink>
    {', '}
    <FilterLink filter ='completed'>Completed</FilterLink>
  </p>
);
