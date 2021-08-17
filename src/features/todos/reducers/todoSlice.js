import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

const todoAdapter = createEntityAdapter();
const initialState = todoAdapter.getInitialState({
    ids: ["1"],
    entities: {
        1: {
            id: uuid(),
            text: "todo example",
            done: false,
        },
    },
});

const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        AddTodo(state, action) {
            todoAdapter.addOne(state, {
                id: uuid(),
                text: action.payload,
                done: false,
            });
            return state;
        },
    },
});

export const { AddTodo } = todoSlice.actions;
export const { selectIds: selectTodoIds, selectById: selectTodoById } =
    todoAdapter.getSelectors((state) => state.todoList);
export default todoSlice.reducer;