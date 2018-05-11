import React from 'react';

function Todo(props) {
    return(
        <div>
            <button onClick= { () => props.deleteTodo(props.index) }> Delete </button>
            {props.todo}
        </div>
    )
}

export default Todo;