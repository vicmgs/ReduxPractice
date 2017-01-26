import React from 'react';
import { connect } from 'react-redux';

let nextId = 0;
export let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        dispatch({
          type: 'ADD',
          id: nextId++,
          text: input.value
        })
        input.value = '';
      }}>Add Todo</button>
    </div>
  )
};
AddTodo = connect()(AddTodo);
