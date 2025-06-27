import React, { use } from 'react';
import { ThemeContext } from "../../provider/ThemeProvider";

const NewsLetter = () => {
  const { darkMode } = use(ThemeContext);
  return (
    <div>
      <section className="-mb-28 bg-white/10 border border-white/30 backdrop-blur-md shadow-2xl w-[90%] lg:w-[70%] mx-auto rounded-2xl text-white py-12 px-4 md:px-8">
  <div className="max-w-2xl mx-auto text-center">
    <h2 className={`text-3xl ${darkMode ? 'text-white' : 'text-black'}   font-bold mb-4`}>Stay Updated</h2>
    <p className={`mb-6 text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-800'} font-semibold`}>
      Subscribe to get the latest roommate listings and helpful tips delivered to your inbox.
    </p>
    <form className="flex flex-col sm:flex-row items-center justify-center gap-3">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full sm:w-auto px-4 py-2 rounded-full text-black placeholder:text-black focus:outline-none ring-2 ring-white"
        required
      />
      <button
        type="submit"
        className="bg-white text-[#f2555d] font-semibold px-6 py-2 rounded-full hover:bg-[#ffeaea] transition"
      >
        Subscribe
      </button>
    </form>
  </div>
</section>

      
    </div>
  );
};

export default NewsLetter;