import "../styles/TodoList.css";
import TodoGroup from "./TodoGroup";
import TodoForm from "./TodoForm";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "../apis/todos";
import { AddToDos } from "../reducers/todoSlice";

function TodoList() {

    const dispatch = useDispatch();

    useEffect(() => {
        getTodos().then((response) => {
            console.log("response.data:", response.data);
            dispatch(AddToDos(response.data));
        })
    }, [])

    return (
        <div>
            <h1>Todo List</h1>
            <TodoGroup />
            <TodoForm />
        </div>
    );
}

export default TodoList;