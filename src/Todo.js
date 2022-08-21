import React from 'react'
import './Todo.css';

function DeleteIcon() {
    return (
        <div className='d-flex gap-2 align-items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
            </svg>
           Delete
        </div>
    );
}
const Todo = ({ todo, editTask, deleteTask }) => {

    function onStatusChange(event) {
        todo.isDone = !todo.isDone;
        editTask(todo);
    }
    function onDelete() {
        deleteTask(todo);
    }

    let className = todo.isDone ? "text-decoration-line-through text-muted" : "";

    return (

        <div className='d-flex p-2 mt-2  bg-light rounded-2 justify-content-between' >
            <div className='d-flex gap-3'>
                <input id='isDoneCheckBox' className="form-check-input" type="checkbox" checked={todo.isDone} onChange={onStatusChange} />
                <p id='todo-container' className={className}>{todo.text}</p>
            </div>
            <button onClick={onDelete} className='btn btn-danger ms-3 p-3'> <DeleteIcon/></button>
        </div>
    );
}

export default Todo;