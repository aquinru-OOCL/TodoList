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