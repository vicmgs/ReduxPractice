import React from 'react';
import { AddTodo } from './addTodo/addTodo.jsx';
import { Footer } from './filters/footer.jsx';
import { VisibleTodoList } from './visibleTodos/visibleTodos.jsx';

const App = () => (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
)

export default App;
