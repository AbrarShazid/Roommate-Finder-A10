import React, { useState, use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState("");
  const { logIn, logInGoogle } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {

    e.preventDefault();
    console.log("fuck log in");
    
    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password)
      .then(() => {
        toast.success("Login successful!");
        e.target.reset();
        navigate(location.state || "/");
      })
      .catch((err) => {
        setError("Invalid email or password.");
        toast.error(err.message);
      });
  };

  const handleGoogleLogin = () => {
    logInGoogle()
      .then(() => {
        toast.success("Login successful!");
        navigate(location.state || "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--color-base-200)] px-4 py-[5%]">
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#f2555d] poppins">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4 inter">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              placeholder="Enter your password"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="text-sm text-gray-600 text-right">
            
              Don't have an account?{" "}<Link to="/auth/register">
              <span className="text-[#f2555d] font-bold underline">Register</span>
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-2 bg-[#f2555d] text-white font-semibold rounded hover:bg-[#d9444c] transition"
          >
            Login
          </button>
        </form>

        <div className="mt-6 inter">
          <p className="text-center text-gray-500 text-sm mb-2">
            Or login with
          </p>
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            <FcGoogle size={20} />
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
