// 4. This will take the user's input
const InputTodo = (itemProp) => {
    return (
        <form>
            <input
                type="text"
                placeholder="Add Todo..."
            />
            <button>Submit</button>
        </form>
    )
}

export default InputTodo;