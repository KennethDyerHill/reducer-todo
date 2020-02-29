import React from 'react';

const Todo = props => {
  return (
    <div className= {`task ${props.task.completed ? 'completed' : ''}`}
    onClick={() => props.dispatch({ type: 'TOGGLE_TASK', payload: props.task.id })}>
      <p>{props.task.item}</p>
    </div>
  )
}

export default Todo;