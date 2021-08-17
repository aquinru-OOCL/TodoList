import React from "react";
import { useSelector } from "react-redux";
import { selectTodoById } from "../reducers/todoSlice";

function TodoItem(props) {
    const todo = useSelector((state) => selectTodoById(state, props.itemId));
    return (
        <div>
            {todo.text}
        </div>
    );
}

export default TodoItem;