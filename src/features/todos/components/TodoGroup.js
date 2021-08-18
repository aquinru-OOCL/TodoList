import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { selectTodos } from "../reducers/todoSlice";

function TodoGroup() {
    const todos = useSelector(selectTodos);
    return (
        <div>
            { todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
}

export default TodoGroup;