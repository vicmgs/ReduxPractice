import { v4 } from 'node-uuid';
import * as api from '../fakeBackend.js';

export const addTodo = (text) => ({
  type: 'ADD',
  id: v4(),
  text
});

const receiveTodos = (filter, response) => ({
  type: 'RECEIVE',
  response,
  filter
});

export const fetchTodos = (filter) =>
  api.fetchTodos(filter).then(response =>
    receiveTodos(filter, response)
  );

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  filter
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE',
    id
});
