import "../styles/TodoList.css";
import TodoGroup from "./TodoGroup";
import TodoForm from "./TodoForm";
import React from "react";

function TodoList() {

    return (
        <div>
            <h2>Todo List</h2>
            <TodoGroup />
            <TodoForm />
        </div>
    );
}

export default TodoList;