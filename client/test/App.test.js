import React from 'react';
import { App } from '../app/index.jsx';
import { AddTodo } from '../app/addTodo/addTodo.jsx';
import { Footer } from '../app/filters/footer.jsx';
import { VisibleTodoList } from '../app/visibleTodos/visibleTodos.jsx';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('should render <AddTodo /> component', () => {
    expect(wrapper.find(AddTodo)).to.have.length(1);
  });

  it('should render <VisibleTodoList /> component', () => {
    expect(wrapper.find(VisibleTodoList)).to.have.length(1);
  });

  it('should render <Footer /> component', () => {
    expect(wrapper.find(Footer)).to.have.length(1);
  });
});
