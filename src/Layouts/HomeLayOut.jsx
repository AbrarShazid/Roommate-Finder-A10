import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";
import LoadingSpinner from "../Components/LoadingSpinner";

const HomeLayOut = () => {
  const { state } = useNavigation();

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } min-h-screen flex flex-col transition-colors duration-300`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow">
        {state === "loading" ? <LoadingSpinner /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayOut;
