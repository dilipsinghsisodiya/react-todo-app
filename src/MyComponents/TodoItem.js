import React from 'react'

export default function TodoItem({todo, onDelete}) {
    return (
        <div>
            <h4>{todo.title}</h4>
            <button className="btn btn-outline-danger" onClick={()=>{onDelete(todo)}}
            >Delete</button>
        </div> 
    )
}
