import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodoById, ToggleTodo, DeleteTodo, selectDoneList } from "../reducers/todoSlice";
import "../styles/TodoItem.css";

function TodoItem(props) {
    const dispatch = useDispatch();
    const todoStatus = props.todo.done ? "done" : "";

    function handleClick() {
        dispatch(ToggleTodo(props.todo.id));
    }

    function handleDelete(event) {
        dispatch(DeleteTodo(props.todo.id));
        event.stopPropagation();
    }

    return (
        <div className="TodoItem">
            <ul className={`TodoItem-todo ${todoStatus}`} onClick={handleClick}>
                <li>{props.todo.text}<span class="close" onClick={handleDelete}>x</span></li>
            </ul>
        </div>
        
    );
}

export default TodoItem;