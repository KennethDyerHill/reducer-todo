import React, { useReducer } from 'react';
import './App.css';

import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';
import { reducer, initialState } from './reducers/reducer';

function App() {
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
