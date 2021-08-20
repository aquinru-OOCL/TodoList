import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { deleteTodo, updateTodo, updateTodoText } from "../apis/todos";
import { ToggleTodo, DeleteTodo, UpdateText } from "../reducers/todoSlice";
import "../styles/TodoItem.css";
import { Modal, Input } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

function TodoItem(props) {
    const dispatch = useDispatch();
    const todoStatus = props.todo.done ? "done" : "";
    const todoId = props.todo.id;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { TextArea } = Input;
    const [newText, setNewText] = useState("");

    
    function handleClick() {
        if (!isModalVisible) {
            updateTodo(todoId, {done: !props.todo.done}).then((response) => {
                dispatch(ToggleTodo({id:todoId, updateTodo:response.data}));
            });
        }
    }

    function handleDelete(event) {
        event.stopPropagation();
        
        deleteTodo(todoId).then(() => {
            dispatch(DeleteTodo(todoId));
        });
    }

    function showModal (event) {
        event.stopPropagation();
        setNewText(props.todo.text);
        setIsModalVisible(true);
    };
    
    function handleOk () {
        if(newText !== "") {
            updateTodoText(todoId, {text: newText}).then((response) => {
                dispatch(UpdateText(response.data));
            });
        }

        setIsModalVisible(false);
    };
    
    function handleCancel () {
        setIsModalVisible(false);
    };

    function handleChange(event) {
        setNewText(event.target.value);
    }

    return (
        <div className="TodoItem">
            <ul className={`TodoItem-todo ${todoStatus}`} onClick={handleClick}>
                <li>
                    {props.todo.text}
                    <DeleteOutlined className="close" onClick={handleDelete}></DeleteOutlined>
                    <EditOutlined className={`update ${todoStatus}`} onClick={showModal}></EditOutlined>
                    <Modal title="Update this todo item" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width="40%">
                        <TextArea
                            placeholder="Please input todo text"
                            autoSize={{ minRows: 1, maxRows: 3 }}
                            onChange={handleChange} value={newText}
                        />
                    </Modal>
                </li>
            </ul>
        </div>
    );
}

export default TodoItem;