import React, { useState } from 'react';
import './CenterCard.css';
import AddBar from './AddBar';
import StatusBar from './StatusBar';
import Todos from './Todos';
import ClearAllButton from './ClearAllButton';

function CenterCard() {
    const [state, setState] = useState({ "numberOfPendingTasks": 0, "todos": [] });

    const handleCallback = (todo) => {
        console.log("back in center card", todo);
        let temp = state.todos;
        temp.push(todo);
        setState({ numberOfPendingTasks: temp.length, todos: temp });
        console.log("in todos", state.todos);
    }

    const handleStatusCallback = (flag) => {
        if (flag) setState({ numberOfPendingTasks: 0, todos: [] });
    }

    return (
        <div id="center-card-container">
            <div id="center-card">
                <AddBar getTodo={handleCallback} />
                <Todos todos={state.todos} />
            </div>
            <div id="center-card-status-container">
                <StatusBar n={state.numberOfPendingTasks} />
                <ClearAllButton toClear={handleStatusCallback} />
            </div>
        </div>
    );
}

export default CenterCard;