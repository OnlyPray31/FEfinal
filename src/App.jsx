import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="min-h-screen bg-soft-gradient flex flex-col">
      <Header />

      <main className="flex-1">
        <TodoList />
      </main>

      <Footer />
    </div>
  );
}
