import { use, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

import { ThemeContext } from "../provider/ThemeProvider"; // also update path if needed

const Navbar = () => {
  const { darkMode, toggleDarkMode } =use(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully",{

  style: {
    border: '1px solid gray',
    backgroundColor:"#f2555d",
    padding: '6px',
    color: 'white',
  }



  });
        navigate("/");
      })
      .catch((err) => {
        toast.error("Failed to log out",{

  style: {
    border: '1px solid gray',
    backgroundColor:"#f2555d",
    padding: '6px',
    color: 'white',
  }



  });
     
      });
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline font-bold" : "hover:text-gray-200"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-roommate"
          className={({ isActive }) =>
            isActive ? "underline font-bold" : "hover:text-gray-200"
          }
        >
          Add Roommate
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/browse-listings"
          className={({ isActive }) =>
            isActive ? "underline font-bold" : "hover:text-gray-200"
          }
        >
          Browse Listings
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-listings"
          className={({ isActive }) =>
            isActive ? "underline font-bold" : "hover:text-gray-200"
          }
        >
          My Listings
        </NavLink>
      </li>
      {!user?.email && (
        <>
          <li>
            <NavLink
              to="/auth/login"
              className={({ isActive }) =>
                isActive ? "underline font-bold" : "hover:text-gray-200"
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/auth/register"
              className={({ isActive }) =>
                isActive ? "underline font-bold" : "hover:text-gray-200"
              }
            >
              Signup
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="bg-[#f2555d] text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand Name */}
        <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide text-white">
          <Typewriter
            words={["RoommateFinder", "Better-together..."]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={2000}
          />
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 text-base font-medium items-center">
          {navItems}
          <li>
            <button
              onClick={toggleDarkMode}
              className="bg-white text-[#f2555d] px-3 py-1 rounded text-sm hover:opacity-90"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </li>
          {user?.email && (
            <>
              <li className="relative group">
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                  {user.displayName}
                </span>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-white text-[#f2555d] px-3 py-1 rounded text-sm hover:opacity-90"
                >
                  Log out
                </button>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center space-x-3">
          <button
            onClick={toggleDarkMode}
            className="bg-white text-[#f2555d] px-2 py-1 text-sm rounded"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-4 text-base font-medium">
            {navItems}
            {user?.email && (
              <>
                <div className="flex items-center gap-3">
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="text-white text-sm">{user.displayName}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-white text-[#f2555d] w-full py-1 rounded hover:opacity-90"
                >
                  Log out
                </button>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
