import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import TodoFilter from "./TodoFilter";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");

  const API = "http://localhost:5000/todos";

  useEffect(() => {
    fetch(API).then(res => res.json()).then(setTodos);
  }, []);

  const addTodo = async () => {
    if (!title.trim()) return;

    const newTodo = { title, status: "active" };

    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });

    const saved = await res.json();
    setTodos([...todos, saved]);
    setTitle("");
  };

  const deleteTodo = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    setTodos(todos.filter(t => t.id !== id));
  };

  const updateStatus = async (todo) => {
    const cycle = {
      active: "on-progress",
      "on-progress": "completed",
      completed: "active",
    };

    const updated = { ...todo, status: cycle[todo.status] };

    const res = await fetch(`${API}/${todo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });

    const saved = await res.json();
    setTodos(todos.map(t => (t.id === saved.id ? saved : t)));
  };

  const filtered =
    filter === "all" ? todos : todos.filter(t => t.status === filter);

  return (
    <div className="max-w-2xl mx-auto px-6 py-4">
      <h2 className="text-center text-4xl font-bold text-orange-900 mb-6 drop-shadow">
        Add New Task
      </h2>

      {/* INPUT */}
      <div className="flex justify-center mb-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          className="w-80 p-3 rounded-l-full bg-white/70 shadow-inner 
                     outline-none border-none"
        />
        <button
          onClick={addTodo}
          className="px-6 py-3 rounded-r-full bg-orange-800 text-white font-semibold shadow"
        >
          Add
        </button>
      </div>

      {/* FILTER */}
      <TodoFilter filter={filter} setFilter={setFilter} />

      {/* LIST */}
      <div className="flex flex-col gap-4">
        {filtered.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteTodo}
            onUpdate={updateStatus}
          />
        ))}
      </div>
    </div>
  );
}
