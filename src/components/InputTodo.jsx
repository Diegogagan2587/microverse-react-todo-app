import { useState } from "react";

// 4. This will take the user's input
const InputTodo = (itemProp) => {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    return (
        <form>
            <input
                type="text"
                placeholder="Add Todo..."
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}

export default InputTodo;