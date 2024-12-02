import { useState } from "react";
import Editor from "./components/editor"
import Header from "./components/header"
import Todolist from "./components/todolist"

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        if (newTodo.trim()) {
            setTodos([
                ...todos,
                { text: newTodo, completed: false, date: new Date().toISOString().split("T")[0] },
            ]);
        }
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const toggleComplete = (index) => {
        setTodos(
            todos.map((todo, i) =>
                i === index ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <main>
            <Header/>
            <Editor addTodo={addTodo}/>
            <Todolist
            todos={todos}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}/>
        </main>
    )
}

export default App
