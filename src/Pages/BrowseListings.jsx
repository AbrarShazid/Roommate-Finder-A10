import { useLoaderData, useNavigate } from "react-router";
import { FaMapMarkerAlt, FaDoorOpen } from "react-icons/fa";

const BrowseListings = () => {
  const roommates = useLoaderData();
  const navigate = useNavigate();

  const getAvailabilityBadge = (status) => {
    let isAvailable = false;
    if (status === "available") {
      isAvailable = true;
    }
    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium
          ${
            isAvailable
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-800"
          }`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Roommate Listings
      </h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 "
              >
                Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500  "
              >
                Location
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500  "
              >
                Room Type
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 "
              >
                Availability
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500  "
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {roommates.map((roommate) => (
              <tr key={roommate._id} className="hover:bg-gray-50">
                <td className="px-6 py-4  text-sm font-medium text-gray-900">
                  {roommate.title}
                </td>
                <td className="px-6 py-4  text-sm text-gray-500">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-[#f2555d] mr-1" />
                    {roommate.location}
                  </div>
                </td>
                <td className="px-6 py-4  text-sm text-gray-500">
                  <div className="flex items-center">
                    <FaDoorOpen className="text-indigo-500 mr-1" />
                    {roommate.roomType}
                  </div>
                </td>
                <td className="px-6 py-4 ">
                  {getAvailabilityBadge(roommate.availability)}
                </td>
                <td className="px-6 py-4 ">
                  <button
                    onClick={() => navigate(`/roommate/${roommate._id}`)}
                    className="px-3 py-1 bg-[#f2555d] text-white text-sm rounded hover:bg-[#d94c54] transition"
                  >
                    See More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards   */}
      <div className="md:hidden space-y-4">
        {roommates.map((roommate) => (
          <div
            key={roommate._id}
            className="bg-white p-4 rounded-lg shadow border border-gray-200"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {roommate.title}
            </h3>

            <div className="flex items-center text-sm text-gray-500 mb-1">
              <FaMapMarkerAlt className="text-[#f2555d] mr-2" />
              {roommate.location}
            </div>

            <div className="flex items-center text-sm text-gray-500 mb-2">
              <FaDoorOpen className="text-indigo-500 mr-2" />
              {roommate.roomType}
            </div>

            <div className="flex justify-between items-center">
              {getAvailabilityBadge(roommate.availability)}
              <button
                onClick={() => navigate(`/roommate/${roommate._id}`)}
                className="px-3 py-1 bg-[#f2555d] text-white text-sm rounded hover:bg-[#d94c54] transition"
              >
                See More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseListings;
