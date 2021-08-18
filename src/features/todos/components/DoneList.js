import React from "react";
import { useSelector } from "react-redux";
import { selectDoneList } from "../reducers/todoSlice";
import TodoItem from "./TodoItem";

function DoneList() {
    const doneList = useSelector(selectDoneList);
    return (
        <div>
            <h1>Done List</h1>
            { 
                doneList.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))
            }
            
        </div>
    );
}

export default DoneList;