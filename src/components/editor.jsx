import React, { useState } from 'react'

const Editor = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState("");

    const handleAdd = () => {
        addTodo(newTodo);
        setNewTodo("");
    };

    return (
        <section id="editor" className="container">
            <input 
                type="text"
                placeholder='new todo item...'
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
        </section>
    )
}

export default Editor
