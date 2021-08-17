import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodoById, ToggleTodo, DeleteTodo } from "../reducers/todoSlice";
import "../styles/TodoItem.css";

function TodoItem(props) {
    const todo = useSelector((state) => selectTodoById(state, props.itemId));
    const dispatch = useDispatch();
    const todoStatus = todo.done ? "done" : "";

    function handleClick() {
        dispatch(ToggleTodo(props.itemId));
    }

    function handleDelete() {
        dispatch(DeleteTodo(props.itemId));
    }

    return (
        <div className="TodoItem">
            <ul className={`TodoItem-todo ${todoStatus}`} onClick={handleClick}>
                <li>{todo.text}<span class="close" onClick={handleDelete}>x</span></li>
            </ul>
        </div>
        
    );
}

export default TodoItem;