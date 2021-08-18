import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const todoAdapter = createEntityAdapter();
const initialState = todoAdapter.getInitialState({
    ids: [],
    entities: {},
});

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        AddTodo(state, action) {
            todoAdapter.addOne(state, action.payload);
        },
        ToggleTodo(state, action) {
            todoAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload.updateTodo
            })
        },
        DeleteTodo(state, action) {
            todoAdapter.removeOne(state, action.payload.id);
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