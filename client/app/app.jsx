import React from 'react';
import { AddTodo } from './addTodo/addTodo.jsx';
import { Footer } from './filters/footer.jsx';
import { VisibleTodoList } from './visibleTodos/visibleTodos.jsx';

const App = ({ params }) => (
    <div>
      <AddTodo />
      <VisibleTodoList filter={params.filter || 'all'}/>
      <Footer />
    </div>
)

export default App;
