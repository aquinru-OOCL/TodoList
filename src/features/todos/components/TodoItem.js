import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { deleteTodo, updateTodo } from "../apis/todos";
import { ToggleTodo, DeleteTodo} from "../reducers/todoSlice";
import "../styles/TodoItem.css";
import { Modal } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

function TodoItem(props) {
    const dispatch = useDispatch();
    const todoStatus = props.todo.done ? "done" : "";
    const todoId = props.todo.id;
    const [isModalVisible, setIsModalVisible] = useState(false);

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

    function showModal (event) {
        event.stopPropagation();
        setIsModalVisible(true);
    };
    
    function handleOk (event) {
        event.stopPropagation();
        setIsModalVisible(false);
    };
    
    function handleCancel (event) {
        event.stopPropagation();
        setIsModalVisible(false);
    };

    return (
        <div className="TodoItem">
            <ul className={`TodoItem-todo ${todoStatus}`} onClick={handleClick}>
                <li>
                    {props.todo.text}
                    <DeleteOutlined className="close" onClick={handleDelete}></DeleteOutlined>
                    <EditOutlined className={`update ${todoStatus}`} onClick={showModal}></EditOutlined>
                    <Modal title="Update this todo item" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width="40%">
                        <span>{props.todo.text}</span>
                    </Modal>
                </li>
            </ul>
        </div>
    );
}

export default TodoItem;