import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

const todoAdapter = createEntityAdapter();
const initialState = todoAdapter.getInitialState({
    ids: [],
    entities: {},
});

const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        AddTodo(state, action) {
            todoAdapter.addOne(state, action.payload);
        },
        ToggleTodo(state, action) {
            const todo = state.entities[action.payload];
            todo.done = !todo.done;
        },
        DeleteTodo(state, action) {
            todoAdapter.removeOne(state, action.payload);
        },
        AddToDos(state, action) {
            todoAdapter.addMany(state, action.payload);
        },
    },
});

export const { AddTodo, ToggleTodo, DeleteTodo, AddToDos } = todoSlice.actions;
export const { selectAll: selectTodos, selectIds: selectTodoIds, selectById: selectTodoById } =
    todoAdapter.getSelectors((state) => state.todoList);
export const selectDoneList = createSelector([selectTodos], (todos) => 
      todos.filter((todo) => todo.done)
);
export default todoSlice.reducer;