import React from 'react';
import './Todo.css';

function Todo(props) {
    return (
        <div id="todo-container">
            <span>{ props.todo }</span>
        </div>  
    );
}

export default Todo;