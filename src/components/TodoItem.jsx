const TodoItem = ({ itemProp setTodos }) => {
    return (
        <li>
            <input type="checkbox" />
            {itemProp.title}
        </li>
    );
};

export default TodoItem;