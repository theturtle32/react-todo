import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './App';
import StoreSingleton from './store'
import './index.css';

const store = StoreSingleton.getStore();

const render = () => {
  ReactDOM.render(
    <TodoApp
      {...store.getState()}
    />,
    document.getElementById('root')
  );
};
store.subscribe(render)
render();