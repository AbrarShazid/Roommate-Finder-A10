import React, { use } from "react";
import { FaPlus } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router";

const UpdateList = () => {
  const { user } = use(AuthContext);
  const oldData = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedRoommate = Object.fromEntries(formData.entries());
    updatedRoommate.lifestyle = formData.getAll("lifestyle");
    updatedRoommate.email = user?.email;
    updatedRoommate.name = user?.displayName;

    fetch(`https://roommate-finder-a10-server.vercel.app/roommate/${oldData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRoommate),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Listing updated successfully!",
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
          <h2 className="text-2xl font-bold text-white">Update Roommate Listing</h2>
          <p className="mt-1 text-sm text-white opacity-90">Update the form to find your perfect roommate match</p>
        </div>

        <div className="p-6 sm:p-8">
          <form onSubmit={handleUpdate} className="space-y-6">
          
            <div>
              <label className="block text-sm font-medium text-gray-700">Listing Title *</label>
              <input
                type="text"
                name="title"
                defaultValue={oldData?.title}
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#f2555d] outline-0 border-gray-300"
              />
            </div>

            {/*  Rent */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Location *</label>
                <input
                  type="text"
                  name="location"
                  defaultValue={oldData?.location}
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#f2555d] outline-0 border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Rent *</label>
                <input
                  type="number"
                  name="rent"
                  min="1"
                  defaultValue={oldData?.rent}
                  required
                  className="w-full pl-7 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#f2555d] outline-0 border-gray-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Room Type *</label>
              <select
                name="roomType"
                defaultValue={oldData?.roomType}
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-[#f2555d] outline-0 border-gray-300"
              >
                {roomTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

        
            <div>
              <label className="block text-sm font-medium text-gray-700">Lifestyle Preferences</label>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {lifestyleOptions.map((opt) => (
                  <label key={opt} className="flex items-center text-sm text-gray-700">
                    <input
                      type="checkbox"
                      name="lifestyle"
                      value={opt}
                      defaultChecked={oldData?.lifestyle?.includes(opt)}
                      className="h-5 w-5 text-[#f2555d] border-gray-300"
                    />
                    <span className="ml-2">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

           
            <div>
              <label className="block text-sm font-medium text-gray-700">Description *</label>
              <textarea
                name="description"
                rows="4"
                required
                defaultValue={oldData?.description}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#f2555d] outline-0 border-gray-300"
              />
            </div>

            {/* Contact */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Info *</label>
              <input
                type="text"
                name="contact"
                defaultValue={oldData?.contact}
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#f2555d] outline-0 border-gray-300"
              />
            </div>

            {/* Availability */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Availability *</label>
              <div className="flex space-x-4 mt-2">
                <label className="flex items-center text-sm text-gray-700">
                  <input
                    type="radio"
                    name="availability"
                    value="available"
                    defaultChecked={oldData?.availability === "available"}
                    className="h-5 w-5 text-[#f2555d]"
                  />
                  <span className="ml-2">Available</span>
                </label>
                <label className="flex items-center text-sm text-gray-700">
                  <input
                    type="radio"
                    name="availability"
                    value="not available"
                    defaultChecked={oldData?.availability === "not available"}
                    className="h-5 w-5 text-[#f2555d]"
                  />
                  <span className="ml-2">Not Available</span>
                </label>
              </div>
            </div>

            {/* read only */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Email</label>
                <input
                  type="email"
                  value={user?.email || ""}
                  readOnly
                  className="w-full mt-1 px-4 py-2 border rounded-lg bg-gray-100 outline-0 border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  value={user?.displayName || ""}
                  readOnly
                  className="w-full mt-1 px-4 py-2 border rounded-lg bg-gray-100 outline-0 border-gray-300"
                />
              </div>
            </div>

           
            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-[#f2555d] hover:bg-[#e04a52] text-white rounded-lg shadow font-medium transition-transform transform hover:scale-105"
              >
                <FaPlus className="mr-2" /> Update Listing
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateList;
