
// import { useLoaderData, useNavigate } from "react-router";
// import { FaMapMarkerAlt, FaDoorOpen } from "react-icons/fa";

// const BrowseListings = () => {
//   const roommates = useLoaderData();
//   const navigate = useNavigate();

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6">Roommate Listings</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {roommates.map((roommate) => (
//           <div
//             key={roommate._id}
//             className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-4 flex flex-col justify-between"
//           >
//             <div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
//                 {roommate.title}
//               </h3>

//               <div className="text-sm text-gray-600 flex items-center mb-1">
//                 <FaMapMarkerAlt className="text-[#f2555d] mr-1" />
//                 <span className="truncate">{roommate.location}</span>
//               </div>

//               <div className="text-sm text-gray-600 flex items-center mb-1">
//                 <FaDoorOpen className="text-indigo-500 mr-1" />
//                 <span>{roommate.roomType}</span>
//               </div>

//               <div className="text-sm text-gray-700 font-medium mt-2">
//                 Rent: <span className="text-gray-800 font-semibold">৳{roommate.rent}</span>
//               </div>
//             </div>

//             <div className="mt-4 flex justify-between items-center">
//               <span
//                 className={`px-2 py-1 rounded-full text-xs font-medium ${
//                   roommate.availability === "available"
//                     ? "bg-green-100 text-green-700"
//                     : "bg-gray-100 text-gray-600"
//                 }`}
//               >
//                 {roommate.availability}
//               </span>

//               <button
//                 onClick={() => navigate(`/roommate/${roommate._id}`)}
//                 className="px-3 py-1 bg-[#f2555d] text-white text-sm rounded hover:bg-[#d94c54] transition"
//               >
//                 See More
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BrowseListings;















import { useNavigate, useSearchParams } from "react-router";
import { FaMapMarkerAlt, FaDoorOpen, FaSortAmountDown, FaFilter } from "react-icons/fa";
import { useEffect, useState } from "react";

const BrowseListings = () => {

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [roommates, setRoommates] = useState([]);

  

  // Get current filter and sort values from URL
  const currentSort = searchParams.get("sort") || "asc";
  const currentType = searchParams.get("type") || "";

useEffect(() => {
    const fetchListings = async () => {
      const res = await fetch(`https://roommate-finder-a10-server.vercel.app/roommates?sort=${currentSort}&type=${currentType}`);
      const data = await res.json();
      setRoommates(data);
    };
    fetchListings();
  }, [currentSort, currentType]);

  const handleSortChange = (e) => {
    const newSort = e.target.value;
    const params = new URLSearchParams(searchParams);
    params.set("sort", newSort);
    setSearchParams(params);
  };

  const handleTypeChange = (e) => {
    const newType = e.target.value;
    const params = new URLSearchParams(searchParams);

    if (newType) {
      params.set("type", newType);
    } else {
      params.delete("type");
    }

    setSearchParams(params);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Roommate Post Listings</h2>

      {/* Filter and Sort Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="flex items-center gap-4">
          {/* Sort Dropdown */}
          <div className="relative">
            <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-3 py-2">
              <FaSortAmountDown className="text-gray-500" />
              <select
                value={currentSort}
                onChange={handleSortChange}
                className="appearance-none bg-transparent pr-6 focus:outline-none text-sm w-full"
              >
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Filter Dropdown */}
          <div className="relative">
            <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-3 py-2">
              <FaFilter className="text-gray-500" />
              <select
                value={currentType}
                onChange={handleTypeChange}
                className="appearance-none bg-transparent pr-6 focus:outline-none text-sm"
              >
                <option value="">All Types</option>
                <option value="Shared">Shared Room</option>
                <option value="Single">Single Room</option>
              </select>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-600">
          Showing {roommates.length} {roommates.length === 1 ? "listing" : "listings"}
        </div>
      </div>

      {/* Roommate Listings Grid */}
      {roommates.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roommates.map((roommate) => (
            <div
              key={roommate._id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-4 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                  {roommate.title}
                </h3>

                <div className="text-sm text-gray-600 flex items-center mb-1">
                  <FaMapMarkerAlt className="text-[#f2555d] mr-1" />
                  <span className="truncate">{roommate.location}</span>
                </div>

                <div className="text-sm text-gray-600 flex items-center mb-1">
                  <FaDoorOpen className="text-indigo-500 mr-1" />
                  <span>{roommate.roomType}</span>
                </div>

                <div className="text-sm text-gray-700 font-medium mt-2">
                  Rent: <span className="text-gray-800 font-semibold">৳{roommate.rent}</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${roommate.availability === "available"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                    }`}
                >
                  {roommate.availability}
                </span>

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
      ) : (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-600">No listings found matching your criteria</p>
          <button
            onClick={() => {
              const params = new URLSearchParams(searchParams);
              params.delete("type");
              setSearchParams(params);
            }}
            className="mt-4 px-4 py-2 bg-[#f2555d] text-white rounded hover:bg-[#d94c54] transition"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default BrowseListings;
