import api from "../../config/api";

async function fetchAllTodos() {
  const result = await api.get("/todos/all");

  const todos = result.data;

  return todos;
}

async function fetchTodoById(todoId) {
  const result = await api.get("/todos/byid", { params: { todoId } });

  const todo = result.data.todo;
  console.log("Todo");
  return todo;
}
// GET-Anfrage für "/byuserid"
async function getTodosByUserId(userId) {
  const result = await api.get("/todos/byuserid", {
    params: { userId },
  });

  const todos = result.data;

  return todos;
}

export default { fetchAllTodos, fetchTodoById, getTodosByUserId };
