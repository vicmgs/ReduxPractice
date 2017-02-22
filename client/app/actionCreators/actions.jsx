let nextId = 0;
export const addTodo = (text) => {
  return {
    type: 'ADD',
    id: nextId++,
    text
  };
}

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE',
    id
  }
}
