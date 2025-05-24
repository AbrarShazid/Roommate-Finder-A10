import React, { use } from "react";
import Marquee from "react-fast-marquee";
import { ThemeContext } from "../../provider/ThemeProvider";

const testimonials = [
  {
    id: 1,
    name: "Emma Johnson",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback: "I found the perfect roommate through this platform! The process was seamless and safe."
  },
  {
    id: 2,
    name: "Liam Smith",
    photo: "https://randomuser.me/api/portraits/men/34.jpg",
    feedback: "Great variety of listings and very responsive support. Highly recommend it!"
  },
  {
    id: 3,
    name: "Sophia Lee",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback: "The filtering options made it easy to find someone with similar lifestyle preferences."
  },
  {
    id: 4,
    name: "Noah Brown",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    feedback: "The platform’s interface is intuitive and user-friendly. Found my roommate quickly!"
  },
  {
    id: 5,
    name: "Olivia Martinez",
    photo: "https://randomuser.me/api/portraits/women/22.jpg",
    feedback: "Safe and secure with verified profiles. I feel confident using this service."
  },
  {
    id: 6,
    name: "James Wilson",
    photo: "https://randomuser.me/api/portraits/men/56.jpg",
    feedback: "Excellent customer service and easy communication with potential roommates."
  },
  {
    id: 7,
    name: "Ava Davis",
    photo: "https://randomuser.me/api/portraits/women/35.jpg",
    feedback: "Found a roommate who shares my lifestyle and interests. Highly recommended!"
  },
  {
    id: 8,
    name: "Ethan Miller",
    photo: "https://randomuser.me/api/portraits/men/23.jpg",
    feedback: "Flexible budget options made my search so much easier and tailored."
  },
  {
    id: 9,
    name: "Isabella Garcia",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    feedback: "The chat feature is great for getting to know roommates before meeting."
  },
  {
    id: 10,
    name: "Mason Lee",
    photo: "https://randomuser.me/api/portraits/men/19.jpg",
    feedback: "Very reliable platform. Found a roommate quickly and smoothly."
  }
];

const Review = () => {

    const { darkMode } = use(ThemeContext);
  return (
    <section className={darkMode?`py-12 bg-gray-900` :`py-12  `}>
      <h2 className={darkMode?`text-center text-3xl font-bold text-white mb-6`:`text-center text-3xl font-bold text-[#f2555d] mb-6`}>
        What Our Users Say
      </h2>
      <Marquee pauseOnHover speed={50} gradient={false}>
        {testimonials.map((t) => (
          <div
            key={t.id}
            className={darkMode? ` bg-gray-600 text-white rounded-2xl shadow-2xl mx-4 px-6 py-4 min-w-[280px] max-w-[300px] flex flex-col items-center text-center`: `bg-[#fff1f1]  rounded-2xl shadow-md mx-4 px-6 py-4 min-w-[280px] max-w-[300px] flex flex-col items-center text-center`}
          >
            <img
              src={t.photo}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-[#f2555d]"
            />
            <h4 className="font-semibold text-lg text-[#f2555d]">{t.name}</h4>
            <p className={darkMode?`text-white text-sm mt-2 italic`:`text-sm text-gray-600 mt-2 italic`}>“{t.feedback}”</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Review;
