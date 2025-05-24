import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const MyListings = () => {
  const { user } = use(AuthContext);
  const [myListings, setMyListings] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.email) {
      fetch(`https://roommate-finder-a10-server.vercel.app/myListing?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyListings(data));
    }
  }, [user]);

  // delete functionality here

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Data cannot restore!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://roommate-finder-a10-server.vercel.app/roommate/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setMyListings((prev) => prev.filter((item) => item._id !== id));
              Swal.fire(
                "Deleted!",
                "Your listing has been deleted.",
                "success"
              );
            } else {
              Swal.fire("Error", "Failed to delete", "error");
            }
          });
      }
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
        My Listings
      </h2>

      {/* Desktop  */}
      <div className="hidden md:block">
        <table className="w-full bg-white border border-gray-200 rounded shadow-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                Title
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                Location
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                Room Type
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {myListings.map((listing) => (
              <tr key={listing._id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3">{listing.title}</td>
                <td className="px-4 py-3 text-gray-600">{listing.location}</td>
                <td className="px-4 py-3 text-gray-600">{listing.roomType}</td>
                <td className="px-4 py-3 space-x-2">
                  <button
                    onClick={() => navigate(`/update/${listing._id}`)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(listing._id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {myListings.map((listing) => (
          <div
            key={listing._id}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <div className="mb-2">
              <span className="text-gray-500 text-sm">Title:</span>
              <p className="text-gray-900 font-medium">{listing.title}</p>
            </div>
            <div className="mb-2">
              <span className="text-gray-500 text-sm">Location:</span>
              <p className="text-gray-700">{listing.location}</p>
            </div>
            <div className="mb-2">
              <span className="text-gray-500 text-sm">Room Type:</span>
              <p className="text-gray-700">{listing.roomType}</p>
            </div>
            <div className="flex justify-start gap-2 mt-3">
              <button  onClick={() => navigate(`/update/${listing._id}`)} className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm">
                Update
              </button>
              <button
                onClick={() => handleDelete(listing._id)}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {myListings.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          You don't have any listings yet.
        </div>
      )}
    </div>
  );
};

export default MyListings;
