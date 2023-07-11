// 5. TodoList Serves as a container for the todos items.
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

const TodosList = ({ todosProps, setTodos, delTodo }) => {
    return (
        <ul className="todos-container">
            {todosProps.map((todo) => (
                <TodoItem key={todo.id} itemProp={todo} setTodos={setTodos} delTodo={delTodo} />
            ))}
        </ul>
    );
}

TodosList.propTypes = {
    todosProps: PropTypes.object.isRequired,
    setTodos: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default TodosList;