import api from "../../config/api";

async function createTodo(newTodo) {
  const result = api.post("/todos/create", {
    newTodo: newTodo,
  });

  const todos = result.data;

  return todos;
}

// PUT-Anfrage für "/mark"
async function markTodoAsCompleted(todoId) {
  const result = await api.put("/todos/mark", { todoId: todoId });

  const updatedTodo = result.data.todo;

  return updatedTodo;
}

// PUT-Anfrage für "/update"
async function updateTodo(todoId, updatedTodo) {
  const result = await api.put("/todos/update", {
    todoId: todoId,
    updatedTodo: updatedTodo,
  });

  const updatedTodoResponse = result.data.todo;

  return updatedTodoResponse;
}

// DELETE-Anfrage für "/delete"
async function deleteTodo(todoId) {
  const result = await api.delete("/todos/delete", {
    params: { todoId: todoId },
  });

  return result.data;
}

console.log("Hello people");

export default { createTodo, markTodoAsCompleted, updateTodo, deleteTodo };
