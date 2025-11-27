import { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../services/api";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAdd = async (title) => {
    await addTodo({ title, completed: false });
    loadTodos();
  };

  const handleToggle = async (todo) => {
    await updateTodo(todo.id, {
      ...todo,
      completed: !todo.completed
    });
    loadTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>

      <TodoForm onAdd={handleAdd} />

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
