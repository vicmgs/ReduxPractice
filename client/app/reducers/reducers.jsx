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

export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return state.concat(todo(undefined, action));
    case 'TOGGLE':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
}
