import React, {useState} from "react";
import { v4 as uuid } from 'uuid';
import Todo from "./Todo";
import NewTodoForm from "../TodoApp/NewTodoForm";


const TodoList = () => {
    const InitialState = [
        {id: uuid(), todo: "Go for a walk"},
        {id: uuid(), todo: "Hit the gym"}
    ]

    const [todo, setTodo] = useState(InitialState);
    const addTodo = (newTodo) => {
        setTodo(todos => [...todos, {...newTodo, id: uuid() }]);
    }

    // Delete Todo
    const deleteTodo = (id) => {
        setTodo(todos => todos.filter(todo => todo.id !== id));
    }

    return (
        <div className="TodoList">
            <NewTodoForm addTodo={addTodo}/>
            <h3>My Todo List</h3>
                {todo.map(todo => (
                    <div key={todo.id}>
                        <button onClick={ () => deleteTodo(todo.id)}>X</button>
                        <Todo
                            id={todo.id}
                            todo={todo.todo}
                        />
                    </div>
            ))}
        </div>
    )
}

export default TodoList;