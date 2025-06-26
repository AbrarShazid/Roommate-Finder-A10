import React, { use } from "react";
import { FaUserPlus, FaSearch, FaComments, FaHome } from "react-icons/fa";
import { ThemeContext } from "../../provider/ThemeProvider";

const HowWorks = () => {
  const { darkMode } = use(ThemeContext);

  const steps = [
    {
      icon: FaUserPlus,
      title: "Create Profile",
      description: "Sign up and create your detailed roommate profile with preferences and requirements"
    },
    {
      icon: FaSearch,
      title: "Browse & Post",
      description: "Search through listings or post your own room availability"
    },
    {
      icon: FaComments,
      title: "Connect",
      description: "Message potential roommates and schedule meetups"
    },
    {
      icon: FaHome,
      title: "Move In",
      description: "Find your perfect match and start your new living arrangement"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
      <div className="text-center  mb-7 lg:mb-12">
        <h2 className={`text-3xl font-bold mb-3 ${
          darkMode ? "text-white" : "text-[#f2555d]"
        }`}>
          How It Works
        </h2>
        <p className={`text-gray-600 ${
          darkMode ? "text-white" : "text-gray-600"
        }`}>
          Find your perfect roommate in just 4 simple steps
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="relative  lg:mb-6">
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              }`}>
                <step.icon className="text-[#f2555d] text-2xl" />
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 dark:bg-gray-600 transform translate-x-4"></div>
              )}
            </div>
            <h3 className={`text-xl font-semibold mb-3 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}>
              {step.title}
            </h3>
            <p className={`text-sm leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWorks; 