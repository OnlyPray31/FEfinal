import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./components/Home";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-soft-gradient flex flex-col">
      <Routes>

        {/* LOGIN PAGE */}
        <Route path="/" element={<Login />} />

        {/* HOME PAGE */}
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <main className="flex-1">
                <Home />
                <section id="todo" className="mt-20">
                  <TodoList />
                </section>
              </main>
              <Footer />
            </>
          }
        />

      </Routes>
    </div>
  );
}
