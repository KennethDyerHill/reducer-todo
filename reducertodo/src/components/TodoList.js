import React from 'react';
import Todo from './Todo'; 

const TodoList = (props) => {
    return (
        <div>
            <h1>My Todo List</h1>
            {props.listState.map(task => (
                <Todo key={task.id} task={task} dispatch={props.dispatch} />
            ))}
        </div>
    )
}

export default TodoList;