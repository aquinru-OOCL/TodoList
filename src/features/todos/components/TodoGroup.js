import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { selectTodoIds } from "../reducers/todoSlice";

function TodoGroup() {
    const todoIds = useSelector(selectTodoIds);
    return (
        <div>
            { todoIds.map((id) => (
                    <TodoItem key={id} itemId={id} />
            ))}
        </div>
    );
}

export default TodoGroup;