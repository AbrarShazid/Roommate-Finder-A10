import React, { use } from 'react';
import { Link, useLoaderData } from 'react-router';
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaDoorOpen,
  FaCheckCircle,
} from 'react-icons/fa';
import { ThemeContext } from '../provider/ThemeProvider';

const Featured = () => {
  const sixData = useLoaderData();
  const { darkMode } = use(ThemeContext);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2
        className={`text-3xl md:text-4xl font-bold text-center mb-10 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}
      >
        ✨ Featured Roommates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sixData.map((roommate) => (
          <div
            key={roommate._id}
            className={`rounded-2xl shadow-lg p-6 border transition-all duration-300 ${
              darkMode
                ? 'bg-gray-700 border-gray-50 text-white'
                : 'bg-white border-gray-100 hover:shadow-xl text-gray-800'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-2">{roommate.title}</h3>

            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#f2555d]" />
                {roommate.location}
              </p>
              <p className="flex items-center gap-2">
                <FaMoneyBillWave className="text-[#f2555d]" />
                ${roommate.rent} / month
              </p>
              <p className="flex items-center gap-2">
                <FaDoorOpen className="text-[#f2555d]" />
                {roommate.roomType} Room
              </p>
              <p className="flex items-center gap-2">
                <FaCheckCircle
                  className={`text-sm ${
                    roommate.availability === 'available'
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                />
                {roommate.availability}
              </p>
            </div>

            <div className="mt-4">
              <Link
                to={`/roommate/${roommate._id}`}
                className="inline-block text-sm text-white bg-[#f2555d] hover:bg-[#e0444d] px-4 py-2 rounded-full transition-all"
              >
                See more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
