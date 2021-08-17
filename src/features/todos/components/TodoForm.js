import React, { useState } from "react";
import "../styles/TodoForm.css";
import { AddTodo } from "../reducers/todoSlice";
import { useDispatch } from "react-redux";

function TodoForm() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleAdd() {
        dispatch(AddTodo(text));
        console.log("handleAdd: ", text);
    }

    return (
        <div className="TodoForm">
            <input type="text" placeholder="Input a new todo item" onChange={handleChange}/>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

export default TodoForm;