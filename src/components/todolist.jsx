import React, { useState } from 'react'
import TodoItem from './todoitem';

const Todolist = ({ todos, deleteTodo, toggleComplete }) => {
    const [search, setSearch] = useState("");

    const filteredTodos = todos.filter((todo) =>
        todo.text.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section id="list" className="container">
            <h1>Todo List 🛒</h1>
            <input 
                type="text" 
                placeholder="Please enter the keyword you would like to search for"
                value = {search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {filteredTodos.length > 0 ? (
                filteredTodos.map((todo, index) => (
                    <TodoItem 
                        key={index}
                        todo={todo}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        index={index}
                    />
                ))
            ) : (
                    <p>No todos found!</p>
                )}
        </section>
    )
}

export default Todolist
