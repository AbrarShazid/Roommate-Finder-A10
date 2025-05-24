import React, { use } from "react";
import Swipper from "../Components/Swipper";
import Review from "../Components/Extra/Reviews";
import Faq from "../Components/Extra/Faq";
import { ThemeContext } from "../provider/ThemeProvider";
import Featured from "../Components/Featured";

const Home = () => {
  const { darkMode } = use(ThemeContext);


  return (
    <div
      className={darkMode?`min-h-screen bg-gray-900`:`min-h-screen `}
    >
     

      <div className="pt-6">
        <Swipper  />

        {/* 6 featured card  */}

        <Featured></Featured>



        <Review  />
        <Faq  />
      </div>
    </div>
  );
};

export default Home;
