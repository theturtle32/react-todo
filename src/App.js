import React from 'react';
import StoreSingleton from './store';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const store = StoreSingleton.getStore();
let nextTodoId = 0;


function addTodo(text) {
  store.dispatch({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  });
}

function getVisibleTodos(todos, visibilityFilter) {
  switch(visibilityFilter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
}

function setVisibilityFilter(filter) {
  store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter
  });
}

const TodoApp = ({
  visibilityFilter,
  todos
}) => (
  <div>
    <AddTodo
      onAddClick={text => addTodo(text)}
    />
    
    <TodoList
      todos={getVisibleTodos(todos, visibilityFilter)}
      onTodoClick={id => store.dispatch({ type: 'TOGGLE_TODO', id })}
    />

    <Footer
      visibilityFilter={visibilityFilter}
      onFilterClick={filter => setVisibilityFilter(filter)}
    />
  </div>
);

export default TodoApp;