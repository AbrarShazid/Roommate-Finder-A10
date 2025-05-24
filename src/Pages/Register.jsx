import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {

  const { createUser, setUser, logInGoogle } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleReg = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photoUrl.value;
    const password = e.target.password.value;

   if (!/[A-Z]/.test(password)) {
  toast.error("Password must include at least one uppercase letter.",{

  style: {
    border: '1px solid gray',
    backgroundColor:"#f2555d",
    padding: '6px',
    color: 'white',
  }



  });
  return;
}

    if (!/[a-z]/.test(password)) {
  toast.error("Password must include at least one lowercase letter.",{

  style: {
    border: '1px solid gray',
    backgroundColor:"#f2555d",
    padding: '6px',
    color: 'white',
  }



  });
  return;
}
if (password.length < 6) {
  toast.error("Password must be at least 6 characters long.",{

  style: {
    border: '1px solid gray',
    backgroundColor:"#f2555d",
    padding: '6px',
    color: 'white',
  }



  });
  return;
}


    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            toast.success("SignUp Successful!");
            setUser({ ...user, displayName: name, photoURL: photo });

            e.target.reset();
            navigate("/");
          })
          
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const googleLogIn = () => {
    logInGoogle()
      .then((result) => {
        toast.success("SignUp Successful!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--color-base-200)] px-4 py-[5%]">
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#f2555d] poppins">
          Register
        </h2>

        <form onSubmit={handleReg} className="space-y-4 inter">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              placeholder="Enter your name"
              required
            />
          </div>

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
              Photo URL
            </label>
            <input
              name="photoUrl"
              type="url"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              placeholder="Link to your photo"
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
       
          <div className="text-sm text-gray-600 text-right">
            Already have an account?{" "}
            <Link to="/auth/login">
              <span className="text-[#f2555d] font-bold underline">Login</span>
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-2 bg-[#f2555d] text-white font-semibold rounded hover:bg-[#d9444c] transition"
          >
            Register
          </button>
        </form>

        <div className="mt-6 inter">
          <p className="text-center text-gray-500 text-sm mb-2">
            Or register with
          </p>
          <button
            onClick={googleLogIn}
            className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            <FcGoogle size={20} />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
