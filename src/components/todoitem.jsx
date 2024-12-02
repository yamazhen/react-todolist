import React from 'react'

const TodoItem = ({ index, todo, toggleComplete, deleteTodo }) => {
    return (
        <div id="todo-item">
            <div id="todo-left">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(index)}
                />
                <h4 style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                    {todo.text}
                </h4>
            </div>
            <div id="todo-right">
                <p>{todo.date}</p>
                <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem
