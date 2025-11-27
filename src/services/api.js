const API = "http://localhost:5000/todos";

export async function getTodos() {
  const res = await fetch(API);
  return res.json();
}

export async function addTodo(todo) {
  return fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo)
  });
}

export async function updateTodo(id, todo) {
  return fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo)
  });
}

export async function deleteTodo(id) {
  return fetch(`${API}/${id}`, {
    method: "DELETE"
  });
}
