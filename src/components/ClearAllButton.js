import React from "react";
import  "./ClearAllButton.css";

const clearAll = (props) => {
    
    const onClickHandle = () => {
        props.toClear(true);
    }
    
    return (
        <div id="clear-all-btn-container">
            <button onClick={onClickHandle}>Clear All</button>
        </div>
    );
}

export default clearAll;