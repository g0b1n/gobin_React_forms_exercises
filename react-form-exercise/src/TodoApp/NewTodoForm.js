import React, {useState} from "react";

const NewTodoForm = ({addTodo}) => {    
    const InitialState = {
        todo: ""
    }

    const [formData, setFormData] = useState(InitialState);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({...formData})
        setFormData(InitialState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">Todo</label>
            <input 
                id="todo"
                type="text" name="todo"
                placeholder="Add new todo"
                value={formData.todo}
                onChange={handleChange}
            />

            <button>Add New Todo</button>
        </form>
    )
}

export default NewTodoForm;