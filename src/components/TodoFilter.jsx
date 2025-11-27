export default function TodoFilter({ filter, setFilter }) {
  const filters = ["all", "active", "on-progress", "completed"];

  return (
    <div className="flex gap-3 justify-center my-4">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-5 py-2 rounded-full font-semibold shadow
            ${filter === f 
              ? "bg-orange-800 text-white" 
              : "bg-white/60 text-gray-700 border border-white/40"
            }`}
        >
          {f.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
