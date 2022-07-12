import React, { useEffect, useState } from 'react';
import './Todos.css';

function Todos(props) {
    // const [todos, setTodos] = useState([]);

    // useEffect(() =>{
    //     todos.push(props.todo);
    //     console.log("in todos", todos);
    //     setTodos(todos);
    //     props.getListLength(todos.length);
    // },[]);

    return (
        <div id="todos-container">
            <ol>
                {
                    props.todos.map( (todo) => {
                        return <li>{todo}</li>;
                    })
                }
            </ol>
        </div>  
    );
}

export default Todos;