import React, { use, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ThemeContext } from "../provider/ThemeProvider";

export default function Swipper() {
  const { darkMode } = use(ThemeContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Failed to load data:", err));
  }, []);

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper w-[90%] mx-auto mb-12 rounded-3xl"
    >
      {posts.map((post) => (
        <SwiperSlide key={post.id}>
         <div
  className={`flex flex-col items-center justify-center min-h-[40vh] md:min-h-[50vh] p-6 rounded-3xl ${
    darkMode ? "bg-gradient-to-r from-[#616974] to-[#697692] text-white shadow-lg shadow-black/30" : ""
  }`}
  style={
    !darkMode
      ? {
          background: `linear-gradient(to right, ${post.bgFrom}, ${post.bgTo})`,
        }
      : undefined
  }
>

            <img
              src={post.userPhoto}
              alt={post.title}
              className="w-20 h-20 sm:w-24 sm:h-24 xl:w-28 xl:h-28 mb-4 rounded-full border-4 border-white object-cover"
            />
            <h2 className="text-2xl font-semibold mb-2 poppins text-center">
              {post.title}
            </h2>
            <p className="text-base md:text-lg inter text-center italic">
              "{post.description}"
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
