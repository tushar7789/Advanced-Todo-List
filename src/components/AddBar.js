import React from 'react';
import './AddBar.css';

function AddBar(props) {

    const onTrigger = (e) => {
        e.preventDefault();
        props.getTodo(document.querySelector('#todo').value);
        document.querySelector('#todo').value = "";
    }

    return (
        <div id="addbar-container">
            <input id="todo" type="text" placeholder="add a task" />
            <button onClick={ onTrigger }>Add</button>
        </div>
    );
}

export default AddBar;