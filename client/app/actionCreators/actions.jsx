let nextId = 0;
export const addTodo = (text) => ({
  type: 'ADD',
  id: nextId++,
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
