import React from 'react';
import { todos, vizFilter } from '../app/reducers/reducers.jsx';

describe('Reducers', () => {

  it('returns an empty array as default state of Todos', function(){
    let newState = todos(undefined, { type: 'unknown' });
    expect(newState).to.deep.equal([]);
  });

  it('returns an anything as default state for vizFilter', function(){
    let newState = vizFilter(undefined, { type: 'SET_FILTER', filter: 'unknown' });
    expect(newState).to.deep.equal('unknown');
  });
});
