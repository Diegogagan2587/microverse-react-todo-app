// 6. TodoItem will render individual todos item
import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, setTodos, delTodo }) => {
    const handleChange = (id) => {
        console.log('cliked', id)//remove after debuggin
        setTodos((prevState) => 
            prevState.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            })
        );
    }
    return (
        <li>
            <input
                type="checkbox"
                checked={itemProp.completed}
                onChangeCapture={() => handleChange(itemProp.id)}
            />
            <button 
            type="button"
            onClick={() => delTodo(itemProp.id)}
            >Delete</button>
            {itemProp.title}
        </li>
    );
};

TodoItem.propTypes = {
    itemProp: PropTypes.object.isRequired, 
    setTodos: PropTypes.func.isRequired, 
    delTodo: PropTypes.func.isRequired,
}

export default TodoItem;