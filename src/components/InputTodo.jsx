import { useState } from "react";

// 4. This will take the user's input
const InputTodo = (itemProp) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(title)
        setTitle('');
    }

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add Todo..."
                onChange={handleChange}
                value={title}
            />
            <button>Submit</button>
        </form>
    )
}

export default InputTodo;