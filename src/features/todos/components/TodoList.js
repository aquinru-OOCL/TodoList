import React from "react";
import TodoGroup from "./TodoGroup";
import TodoForm from "./TodoForm";
import "../styles/TodoList.css";

function TodoList() {
    return (
        <div>
            <h1>TodoList</h1>
            <TodoGroup />
            <TodoForm />
        </div>
    );
}

export default TodoList;