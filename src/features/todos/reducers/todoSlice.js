import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

const todoAdapter = createEntityAdapter();
const initialState = todoAdapter.getInitialState({
    ids: ["1"],
    entities: {
        1: {
            id: uuid(),
            text: "This is the first todo item.",
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
        ToggleTodo(state, action) {
            const todo = state.entities[action.payload];
            todo.done = !todo.done;
        },
        DeleteTodo(state, action) {
            todoAdapter.removeOne(state, action.payload);
        },
    },
});

export const { AddTodo, ToggleTodo, DeleteTodo } = todoSlice.actions;
export const { selectIds: selectTodoIds, selectById: selectTodoById } =
    todoAdapter.getSelectors((state) => state.todoList);
export default todoSlice.reducer;