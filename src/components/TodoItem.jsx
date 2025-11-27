export default function TodoItem({ todo, onDelete, onUpdate }) {
  const statusColor = {
    active: "text-yellow-700",
    "on-progress": "text-blue-700",
    completed: "text-green-700",
  };

  return (
    <div className="bg-white/80 backdrop-blur-md px-6 py-4 rounded-3xl 
                    shadow-lg border border-white/40 flex justify-between items-center">
      
      <div>
        <h3 className="text-lg font-bold text-gray-800">{todo.title}</h3>
        <p className="text-sm text-gray-600">
          Status: <span className={statusColor[todo.status]}>{todo.status}</span>
        </p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => onUpdate(todo)}
          className="px-4 py-2 rounded-full bg-orange-300 hover:bg-orange-400 
                     text-gray-800 font-semibold shadow"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(todo.id)}
          className="px-4 py-2 rounded-full bg-orange-800 hover:bg-brown-600 
                     text-white shadow"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
