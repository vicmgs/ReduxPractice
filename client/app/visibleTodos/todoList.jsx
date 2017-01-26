import React from 'react';
import { Todo } from './todos.jsx';

export const TodoList = ({todos, onTodoClick}) => (
  <ul>
    {todos.map(todo =>
      <Todo key={todo.id} text={todo.text}
      completed={todo.completed}
      onClick={() => onTodoClick(todo.id)} />
    )}
  </ul>
)
