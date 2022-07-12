import React, { useEffect, useState } from 'react';
import './StatusBar.css';

function StatusBar(props) {
    const [pendingTask, setPendingTask] = useState(0);

    useEffect(() => {
        setPendingTask(props.n);
    })

    return (
        <div id="statusbar-container">
            <span>You &nbsp; have &nbsp; 
                {pendingTask} &nbsp; 
                {pendingTask == 1 ? "task" : "tasks"} &nbsp; 
                pending...
            </span>
        </div>
    );
}

export default StatusBar; 