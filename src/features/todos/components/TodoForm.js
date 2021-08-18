import React, { useState } from "react";
import "../styles/TodoForm.css";
import { AddTodo } from "../reducers/todoSlice";
import { useDispatch } from "react-redux";
import { createTodo } from "../apis/todos";
import { Input, Button } from 'antd';
import { FormOutlined } from '@ant-design/icons';

function TodoForm() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleAdd() {
        if (text !== "") {
            createTodo(text).then((response) => {
                dispatch(AddTodo(response.data));
                setText("");
            });
        }
    }

    return (
        <div className="TodoForm">
            <Input className="InputForm" placeholder="Input a new todo item" onChange={handleChange} value={text} prefix={<FormOutlined />}></Input>
            <Button className="AddButton" type="primary" shape="round" onClick={handleAdd}>Add</Button>
        </div>
    );
}

export default TodoForm;