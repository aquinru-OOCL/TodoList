import api from "./api";

export const getTodos = () => {
    return api.get("/todos");
}

export const createTodo = (text) => {
    return api.post("/todos", {text});
}

export const updateTodo = (id, updateTodo) => {
    return api.put(`/todos/${id}`, updateTodo);
}

export const deleteTodo = (id) => {
    return api.delete(`/todos/${id}`);
}

export const updateTodoText = (id, updateTodoText) => {
    return api.put(`/todos/${id}`, updateTodoText);
}