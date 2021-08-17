import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const todoAdapter = createEntityAdapter();
const initialState = todoAdapter.getInitialState({
    ids: ["1"],
    entities: {
        1: {
            id: "1",
            text: "todo example",
            done: false,
        },
    },
});

const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {},
});

export const { selectIds: selectTodoIds, selectById: selectTodoById } =
    todoAdapter.getSelectors((state) => state.todoList);
export default todoSlice.reducer;