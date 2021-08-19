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
        console.log(event.target);
        setIsModalVisible(true);
    };
    
    function handleOk (event) {
        handleUpdateTodoText(event);
        setIsModalVisible(false);
    };
    
    function handleCancel () {
        setIsModalVisible(false);
    };

    function handleUpdateTodoText(event) {
        updateTodoText(todoId, {text: "static update test"}).then((response) => {
            dispatch(UpdateText({id:todoId, updateTodoText:response.data}));
        });
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
                            defaultValue={props.todo.text}
                            placeholder="Please input todo text"
                            autoSize={{ minRows: 1, maxRows: 3 }}
                        />
                    </Modal>
                </li>
            </ul>
        </div>
    );
}

export default TodoItem;