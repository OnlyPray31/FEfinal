import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full bg-gradient-to-b from-[#faf5ee] to-[#f6e8d3] shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        <h1 className="text-2xl font-bold text-[#4a2f23]">MyList</h1>

        <nav className="flex gap-6 text-[#8b5e3c] font-medium">
          <Link to="/home" className="hover:text-[#4a2f23] transition">
            Home
          </Link>

          <a href="#todo" className="hover:text-[#4a2f23] transition">
            To-Do
          </a>
        </nav>

      </div>
    </header>
  );
}