import React from "react";
import { useDispatch} from "react-redux";
import { deleteTodo, updateTodo } from "../apis/todos";
import { ToggleTodo, DeleteTodo} from "../reducers/todoSlice";
import "../styles/TodoItem.css";

function TodoItem(props) {
    const dispatch = useDispatch();
    const todoStatus = props.todo.done ? "done" : "";
    const todoId = props.todo.id;

    function handleClick() {
        updateTodo(todoId, {done: !props.todo.done}).then((response) => {
            dispatch(ToggleTodo({id:todoId, updateTodo:response.data}));
        });
    }

    function handleDelete(event) {
        event.stopPropagation();
        
        deleteTodo(todoId).then(() => {
            dispatch(DeleteTodo(todoId));
        });
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