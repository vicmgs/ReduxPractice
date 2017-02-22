import { v4 } from 'node-uuid';

export const addTodo = (text) => ({
  type: 'ADD',
  id: v4(),
  text
});

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  filter
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE',
    id
});
