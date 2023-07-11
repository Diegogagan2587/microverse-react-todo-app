// 3. TodosLogic Contains teh application logic. It includes tow direct child components.
import { useState } from "react";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";

const TodosLogic = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Setup development environment',
            completed: true,
        },
        {
            id: 2,
            title: 'Develop website and add content',
            completed: false,
        },
        {
            id: 3,
            title: 'Deploy to live server',
            completed: false,
        },
    ])

    const delTodo = (id) => {
        console.log('deleted,',id)
        setTodos([
            ...todos.filter((todo) => {
                return todo.id !== id;
            }),
        ]);
    };

    const addTodoItem = (title) => {
        // update state with user's input
        console.log('should add item ===>>>',title)
    }

    return (
        <div>
            <InputTodo addTodoItem={addTodoItem}/>
            <TodosList todosProps={todos} setTodos={setTodos} delTodo={delTodo} />
        </div>
    )
}

export default TodosLogic;

