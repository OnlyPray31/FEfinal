import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // SIMPAN STATUS LOGIN
    localStorage.setItem("loggedIn", "true");

    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6e8d3]">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <input type="text" placeholder="Email" className="w-full p-3 mb-3 border rounded-lg" />
        <input type="password" placeholder="Password" className="w-full p-3 mb-5 border rounded-lg" />

        <button
          onClick={handleLogin}
          className="w-full bg-orange-700 text-white py-3 rounded-lg font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
}