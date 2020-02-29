import React, { useState } from 'react';

const TodoForm = (props) => {
    const [inputText, setInputText] = useState('');

    const handleChanges = event => {
        setInputText(event.target.value);
    }

    return (
        <div>
            <form>
                <input 
                    className='inputBar'
                    type='text'
                    name='task'
                    value={inputText}
                    placeholder='...add task'
                    autoComplete='off'
                    onChange={handleChanges}
                />
                <button
                    className='buttons'
                    onClick={(event) => {
                        event.preventDefault();
                        props.dispatch({ type: 'ADD_TASK', payload: inputText});
                    }}
                    >
                        Add
                    </button>
                    <button
                        className='buttons'
                        onClick={(event) => {
                            event.preventDefault();
                            props.dispatch({ type: 'CLEAR_TASK' });
                        }}
                        >
                            Clear
                    </button>
            </form>
        </div>
    )
}

export default TodoForm;