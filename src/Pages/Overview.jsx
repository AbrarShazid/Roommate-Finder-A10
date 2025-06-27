

import React, { use, useEffect, useState } from "react";
import axios from "axios";
import { BarChart2, Users, Activity, RefreshCw } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";
import { MdLocalPostOffice } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { AuthContext } from "../provider/AuthProvider";


const Overview = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  


  const { user } = use(AuthContext);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3000/dashboard");
      setStats(res.data);
     
      setError(null);
    } catch (err) {
      setError("Failed to load stats. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  if (error) {
    return (
      <div className="w-full p-6 bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={fetchStats}
            className="flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-2">
        <div>
          <div className="flex items-center mb-1">
            <BarChart2 className="w-5 h-5 text-red-500 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h2>
          </div>
          <p className="text-gray-500 text-sm">All the Insights You Need, Instantly.</p>
        </div>
      
          <div className="text-xs text-gray-700 md:text-end">
             <p>{user?.displayName}</p>
        <p>{user?.email}</p>
          </div>


  

      
        



      </div>

      {/* Stats Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-lg animate-pulse h-24" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {/* Stat Card 1 */}
          <div className="max-w-sm flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-100 hover:shadow-md transition-all hover:-translate-y-0.5">
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-500 rounded-full mr-3">
                <Users className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-gray-500">Total Users</span>
            </div>
            <p className="text-2xl font-bold mt-2 text-gray-800">
              {stats?.totalUser?.toLocaleString() || 0}
            </p>
          </div>

          {/* Stat Card 2 */}
          <div className="max-w-sm flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-100 hover:shadow-md transition-all hover:-translate-y-0.5">
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-500 rounded-full mr-3">
                <FaLocationDot className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-gray-500">Unique Locations</span>
            </div>
            <p className="text-2xl font-bold mt-2 text-gray-800">
              {stats?.totalPosts?.toLocaleString() || 0}
            </p>
          </div>

          {/* Stat Card 3 */}
          <div className="max-w-sm flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-100 hover:shadow-md transition-all hover:-translate-y-0.5">
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-500 rounded-full mr-3">
                <MdLocalPostOffice className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-gray-500">Total Posts</span>
            </div>
            <p className="text-2xl font-bold mt-2 text-gray-800">
              {stats?.totalPosts?.toLocaleString() || 0}
            </p>
          </div>

          {/* Stat Card 4 */}
          <div className="max-w-sm flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-100 hover:shadow-md transition-all hover:-translate-y-0.5">
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-500 rounded-full mr-3">
                <FaHouse className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-gray-500">Available Rooms</span>
            </div>
            <p className="text-2xl font-bold mt-2 text-gray-800 ">
              {stats?.availableCount?.toLocaleString() || 0}
            </p>
          </div>
        </div>
      )}

      {/* Refresh Button */}
      <div className="flex justify-end mt-4">
        <button
          onClick={fetchStats}
          disabled={loading}
          className="flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`} />
          Refresh Data
        </button>
      </div>
    </div>
  );
};

export default Overview;