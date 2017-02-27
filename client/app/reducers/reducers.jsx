import { combineReducers } from 'redux';

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE':
      if (state.id !== action.id) {
        return state;
      } else {
        return Object.assign({}, state, {completed: !state.completed });
      }
    default:
      return state;
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD':
    case 'TOGGLE':
      return { ...state, [action.id]: todo(state[action.id], action) };
    default:
      return state;
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.id];
    default:
      return state;
  }
}

const getAllTodos = (state) =>
  state.allIds.map(id => state.byId[id]);

export const todos = combineReducers({ byId, allIds });

export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state);
  switch (filter) {
    case 'all':
      return allTodos;
    case 'completed':
      return allTodos.filter(t => t.completed);
    case 'active':
      return allTodos.filter(t => !t.completed);
  }
}
