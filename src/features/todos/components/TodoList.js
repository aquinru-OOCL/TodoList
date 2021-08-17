import React from "react";
import TodoGroup from "./TodoGroup";
import TodoForm from "./TodoForm";

function TodoList() {
    return (
        <div>
            <h3>TodoList</h3>
            <TodoGroup />
            <TodoForm />
        </div>
    );
}

export default TodoList;