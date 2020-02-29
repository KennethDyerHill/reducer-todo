import React from 'react';
import TodoComponent from './Todo'; 

const TodoList = (props) => {
    return (
        <div>
            <h1>My Tdod List</h1>
            {props.listState.map(task => (
                <Todo key={task.id} task={task} dispatch={props.dispatch} />
            ))}
        </div>
    )
}

export default TodoList;