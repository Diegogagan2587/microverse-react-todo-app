// 5. TodoList Serves as a container for the todos items.
import TodoItem from "./TodoItem";

const TodosList = ({todosProps, setTodos}) => {
    return (
        <ul>
            {todosProps.map((todo) => (
                <TodoItem key={todo.id} itemProp={todo} setTodos={setTodos} />
            ))}
        </ul>
    );
}

export default TodosList;