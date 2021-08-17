import React from "react";
import { getTodoById } from "../../../common/utils/utils";
import { initialTodoList } from "../../../common/constants/constants";

function TodoItem(props) {
    const todo = getTodoById(initialTodoList, props.itemId);
    return (
        <div>
            {todo.text}
        </div>
    );
}

export default TodoItem;