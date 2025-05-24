import React, { use } from "react";
import { FaPlus } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddRoommate = () => {
  const { user } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newRoommate = Object.fromEntries(formData.entries());
    newRoommate.lifestyle = formData.getAll("lifestyle");
     newRoommate.email = user?.email


    // sending to db

    fetch("https://roommate-finder-a10-server.vercel.app/roommate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRoommate),
    })
      .then((res) => res.json())
      .then((data) => {
       
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your data has been added",
          showConfirmButton: true,
          timer: 2000,
        });
      });
  };

  const lifestyleOptions = ["Pets", "Smoking", "Night Owl", "Student"];
  const roomTypes = ["Single", "Shared"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-[#f2555d] py-4 px-6">
          <h2 className="text-2xl font-bold text-white">
            Add Roommate Listing
          </h2>
          <p className="mt-1 text-sm text-white opacity-90">
            Fill out the form to find your perfect roommate match
          </p>
        </div>

        <div className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Listing Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Looking for a roommate in Dhaka"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#f2555d] outline-0 border-gray-300   focus:border-transparent "
                required
              />
            </div>

            {/* Location  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="City, Neighborhood"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#f2555d]   outline-0 border-gray-300   focus:border-transparent "
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Rent <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">$</span>
                  <input
                    type="number"
                    name="rent"
                    min="1"
                    placeholder="10000"
                    className="w-full pl-7 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#f2555d]  outline-0 border-gray-300   focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Room  */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Room Type <span className="text-red-500">*</span>
              </label>
              <select
                name="roomType"
                className="w-full mt-1 px-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-[#f2555d]  outline-0 border-gray-300   focus:border-transparent"
                required
              >
                {roomTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Lifestyle */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Lifestyle Preferences
              </label>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {lifestyleOptions.map((opt) => (
                  <label
                    key={opt}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <input
                      type="checkbox"
                      name="lifestyle"
                      value={opt}
                      className="h-5 w-5 text-[#f2555d] border-gray-300"
                    />
                    <span className="ml-2">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                rows="4"
                placeholder="Tell us about yourself and what you're looking for in a roommate..."
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#f2555d]  outline-0 border-gray-300   focus:border-transparent"
                required
              />
            </div>

            {/* Contact */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact Info <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="contact"
                placeholder="Phone or Email"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#f2555d]  outline-0 border-gray-300   focus:border-transparent"
                required
              />
            </div>

            {/* Availability */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Availability <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-4 mt-2">
                <label className="flex items-center text-sm text-gray-700">
                  <input
                    type="radio"
                    name="availability"
                    value="available"
                    defaultChecked
                    className="h-5 w-5 text-[#f2555d]"
                  />
                  <span className="ml-2">Available</span>
                </label>
                <label className="flex items-center text-sm text-gray-700">
                  <input
                    type="radio"
                    name="availability"
                    value="not available"
                    className="h-5 w-5 text-[#f2555d]"
                  />
                  <span className="ml-2">Not Available</span>
                </label>
              </div>
            </div>

            {/* User Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  value={user?.email || ""}
                  readOnly
                  className="w-full mt-1 px-4 py-2 border rounded-lg bg-gray-100  outline-0 border-gray-300   "
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  value={user?.displayName || ""}
                  readOnly
                  className="w-full mt-1 px-4 py-2 border rounded-lg bg-gray-100  outline-0 border-gray-300"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-[#f2555d] hover:bg-[#e04a52] text-white rounded-lg shadow font-medium transition-transform transform hover:scale-105 "
              >
                <FaPlus className="mr-2" /> Add Listing
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRoommate;
