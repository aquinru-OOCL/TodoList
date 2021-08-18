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
            dispatch(AddToDos(response.data));
        })
    }, [])

    return (
        <div>
            <h2>Todo List</h2>
            <TodoGroup />
            <TodoForm />
        </div>
    );
}

export default TodoList;