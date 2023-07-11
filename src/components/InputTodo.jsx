import { useState } from "react";

// 4. This will take the user's input
const InputTodo = ({ itemProp, addTodoItem }) => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(title);
        if (title.trim()) {
            addTodoItem(title);
            setTitle('');
            setMessage('')
        } else {
            setMessage("Please add an Item!.")
        }
    }

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add Todo..."
                    onChange={handleChange}
                    value={title}
                />
                <button>Submit</button>
            </form>
            <span>{message}</span>
        </>

    )
}

export default InputTodo;