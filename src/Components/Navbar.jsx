import { use, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { ThemeContext } from "../provider/ThemeProvider";

import logo from "../assets/logo.png";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = use(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully", {
          style: {
            border: '1px solid gray',
            backgroundColor: "#f2555d",
            padding: '6px',
            color: 'white',
          }
        });
        navigate("/");
      })
      .catch(() => {
        toast.error("Failed to log out", {
          style: {
            border: '1px solid gray',
            backgroundColor: "#f2555d",
            padding: '6px',
            color: 'white',
          }
        });
      });
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/browse-listings", label: "All Listings" },
    { to: "/aboutUs", label: "About Us" },
    { to: "/contact", label: "Contact" },
    { to: "/support", label: "Support" },
  ];

  return (
    <nav className="bg-[#f2555d] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2.5 flex justify-between items-center relative">
        {/* Logo & Brand */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <span className="text-xl sm:text-2xl font-extrabold tracking-wide text-white select-none">
            <Typewriter
              words={["RoommateFinder", "Better-together..."]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={2000}
            />
          </span>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-2 text-base font-medium items-center">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full transition font-semibold focus:outline-none focus:ring-2 focus:ring-white/70 ${
                    isActive
                      ? "bg-white text-[#f2555d] shadow"
                      : "hover:bg-white/20 hover:text-white"
                  }`
                }
                
              >
                {label}
              </NavLink>
            </li>
          ))}
          {!user?.email && (
            <>
              <li>
                <NavLink
                  to="/auth/login"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full transition font-semibold focus:outline-none focus:ring-2 focus:ring-white/70 ${
                      isActive
                        ? "bg-white text-[#f2555d] shadow"
                        : "hover:bg-white/20 hover:text-white"
                    }`
                  }
                  
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/auth/register"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full transition font-semibold focus:outline-none focus:ring-2 focus:ring-white/70 ${
                      isActive
                        ? "bg-white text-[#f2555d] shadow"
                        : "hover:bg-white/20 hover:text-white"
                    }`
                  }
                  
                >
                  Signup
                </NavLink>
              </li>
            </>
          )}
          <li>
            <button
              onClick={toggleDarkMode}
              className="ml-2 bg-white text-[#f2555d] px-3 py-1 rounded-full text-sm font-bold hover:bg-[#ffeaea] focus:outline-none focus:ring-2 focus:ring-white/70 transition"
              
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </li>
          {user?.email && (
            <li className="relative group ml-2">
              <button className="flex items-center gap-2 focus:outline-none" >
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow"
                />
                <span className="hidden xl:inline text-white font-semibold">{user.displayName}</span>
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white text-[#f2555d] rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition pointer-events-auto z-50">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-[#ffeaea] rounded-b"
                >
                  Log out
                </button>
              </div>
            </li>
          )}
        </ul>
        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center space-x-3">
          <button
            onClick={toggleDarkMode}
            className="bg-white text-[#f2555d] px-2 py-1 text-sm rounded-full font-bold focus:outline-none focus:ring-2 focus:ring-white/70"
      
          >
            {darkMode ? "Light" : "Dark"}
          </button>
          <button onClick={toggleMenu} >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {/* Mobile Menu Backdrop */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/40 z-40 lg:hidden animate-fade-in" onClick={toggleMenu} />
        )}
      </div>
      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-3/4 max-w-xs h-full bg-[#f2555d] text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      
        aria-hidden={!isOpen}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-white/20">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
            <span className="text-xl font-extrabold tracking-wide">RoommateFinder</span>
          </div>
          <button onClick={toggleMenu} >
            <X size={28} />
          </button>
        </div>
        <ul className="flex flex-col space-y-2 px-4 py-6 text-base font-medium">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-full transition font-semibold focus:outline-none focus:ring-2 focus:ring-white/70 ${
                    isActive
                      ? "bg-white text-[#f2555d] shadow"
                      : "hover:bg-white/20 hover:text-white"
                  }`
                }
                onClick={toggleMenu}
               
              >
                {label}
              </NavLink>
            </li>
          ))}
          {!user?.email && (
            <>
              <li>
                <NavLink
                  to="/auth/login"
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-full transition font-semibold focus:outline-none focus:ring-2 focus:ring-white/70 ${
                      isActive
                        ? "bg-white text-[#f2555d] shadow"
                        : "hover:bg-white/20 hover:text-white"
                    }`
                  }
                  onClick={toggleMenu}
               
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/auth/register"
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-full transition font-semibold focus:outline-none focus:ring-2 focus:ring-white/70 ${
                      isActive
                        ? "bg-white text-[#f2555d] shadow"
                        : "hover:bg-white/20 hover:text-white"
                    }`
                  }
                  onClick={toggleMenu}
                
                >
                  Signup
                </NavLink>
              </li>
            </>
          )}
          <li>
            <button
              onClick={toggleDarkMode}
              className="bg-white text-[#f2555d] px-3 py-1 rounded-full text-sm font-bold focus:outline-none focus:ring-2 focus:ring-white/70 mt-2"
           
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </li>
          {user?.email && (
            <>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <span className="text-white text-sm font-semibold">{user.displayName}</span>
              </div>
              <button
                onClick={() => { handleLogout(); toggleMenu(); }}
                className="bg-white text-[#f2555d] w-full py-2 rounded-full mt-2 font-semibold hover:bg-[#ffeaea]"
              >
                Log out
              </button>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
