import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import { FaMapMarkerAlt, FaMoneyBillWave, FaDoorOpen, FaCheckCircle, FaPhoneAlt, FaHeart } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const RoommateDetails = () => {
  const roommate = useLoaderData();
  const { user } = use(AuthContext);
  const [likes, setLikes] = useState(roommate.likes || 0);
  const [hasLiked, setHasLiked] = useState(false);
  const isOwnPost = user.email === roommate.email;

const handleLike = () => {
  if ( isOwnPost) return;

  fetch(`https://roommate-finder-a10-server.vercel.app/roommate/like/${roommate._id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userEmail: user.email }),
  })
    .then((res) => res.json())
    .then((data) => {
      setLikes(data.updatedLikes || likes + 1);
      setHasLiked(true);
    })
};

  return (
    <div className="max-w-4xl mx-auto px-8 py-12 bg-white rounded-2xl shadow-md my-8 border border-gray-100">
      <div className="flex  justify-between items-start mb-3">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{roommate.title}</h2>
        {!isOwnPost && (
          <button
            onClick={handleLike}
            className="flex  px-3 py-2 md:px-5 md:py-3 rounded-full transition-all bg-[#f2555d] text-white hover:bg-[#d94c54] shadow-md hover:shadow-lg"
          >
            <FaHeart className="text-white" /> 
           
          </button>
        )}
      </div>
      <div className="flex justify-end">
        <p className=" text-center font-semibold border border-[#d69699] px-2 py-1 rounded-2xl text-gray-600">{likes} people interested in</p>
      </div>


       <div className="my-5">
           {hasLiked && (
        <div className="bg-[#f2555d]/10 p-5 rounded-xl border border-[#f2555d]/20">
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-[#f2555d] text-xl" />
            <div>
              <h3 className="font-semibold text-gray-800">Contact Information</h3>
              <p className="text-gray-700">{roommate.contact}</p>
            </div>
          </div>
        </div>
      )}

      {!hasLiked && !isOwnPost && (
        <div className="text-center  text-gray-500 italic">
          Like this post to reveal contact information
        </div>
      )}
       </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-5 rounded-xl">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#f2555d] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-600">Location</h3>
                <p className="text-gray-800">{roommate.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaMoneyBillWave className="text-[#f2555d] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-600">Rent</h3>
                <p className="text-gray-800">${roommate.rent} / month</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-5 rounded-xl">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaDoorOpen className="text-[#f2555d] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-600">Room Type</h3>
                <p className="text-gray-800">{roommate.roomType}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-[#f2555d] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-600">Availability</h3>
                <p className="text-gray-800">{roommate.availability}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Lifestyle Preferences</h3>
        <div className="flex flex-wrap gap-3">
          {roommate.lifestyle?.map((item, idx) => (
            <span
              key={idx}
              className="bg-[#f2555d]/10 text-[#f2555d] px-4 py-2 rounded-full font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Description</h3>
        <p className="text-gray-700 leading-relaxed">{roommate.description}</p>
      </div>

      {/* {hasLiked && (
        <div className="bg-[#f2555d]/10 p-5 rounded-xl border border-[#f2555d]/20">
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-[#f2555d] text-xl" />
            <div>
              <h3 className="font-semibold text-gray-800">Contact Information</h3>
              <p className="text-gray-700">{roommate.contact}</p>
            </div>
          </div>
        </div>
      )}

      {!hasLiked && !isOwnPost && (
        <div className="text-center py-4 text-gray-500 italic">
          Like this post to reveal contact information
        </div>
      )} */}

      {isOwnPost && (
        <div className="text-center py-4 text-gray-500 italic">
          This is your own post - contact information is visible to others who like it
        </div>
      )}
    </div>
  );
};

export default RoommateDetails;