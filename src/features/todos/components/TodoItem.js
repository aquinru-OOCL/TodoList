import React from "react";
import { useDispatch} from "react-redux";
import { updateTodo } from "../apis/todos";
import { ToggleTodo, DeleteTodo} from "../reducers/todoSlice";
import "../styles/TodoItem.css";

function TodoItem(props) {
    const dispatch = useDispatch();
    const todoStatus = props.todo.done ? "done" : "";

    function handleClick() {
        const todoId = props.todo.id;
        updateTodo(todoId, {done: !props.todo.done}).then((response) => {
            dispatch(ToggleTodo({todoId, updateTodo:response.data}));
        });
    }

    function handleDelete(event) {
        dispatch(DeleteTodo(props.todo.id));
        event.stopPropagation();
    }

    return (
        <div className="TodoItem">
            <ul className={`TodoItem-todo ${todoStatus}`} onClick={handleClick}>
                <li>{props.todo.text}<span className="close" onClick={handleDelete}>x</span></li>
            </ul>
        </div>
        
    );
}

export default TodoItem;