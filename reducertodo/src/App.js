import React, { useReducer } from 'react';
import './App.css';

import TodoForm from './component/TodoForm.js';
import TodoList from './component/TodoList.js';
import reducer, { initialState } from './reducers/reducer';

function Ap() {
  const [listState, dispatch] = useReducer(reducer, initialState);
  console.log(listState);
  return (
    <div className="App">
      <header className="App-header">
        <TodoForm dispatch={dispatch} />
        <TodoList listState={listState} dispatch={dispatch} />
      </header>
    </div>
  );
}

export default App;
