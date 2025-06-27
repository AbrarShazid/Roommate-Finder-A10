// import React from 'react';
// import { NavLink } from 'react-router';
// import { Home, PlusCircle, List } from 'lucide-react'; // Optional icons

// const LeftSidebar = () => {
//   return (
//     <div className="h-full  sticky top-20 bg-[#ffeaea] text-[#f2555d] rounded-xl p-4 flex flex-col gap-4 shadow-md">

//       <NavLink
//         to="/dashboard"
//         end
//         className={({ isActive }) =>
//           `px-4 py-2 rounded-lg font-semibold transition ${
//             isActive
//               ? "bg-[#f2555d] text-white shadow"
//               : "hover:bg-[#f2555d]/10 hover:text-[#f2555d]"
//           }`
//         }
//       >
//         <div className="flex items-center gap-2">
//           <Home size={18} />
//           Overview
//         </div>
//       </NavLink>

//       <NavLink
//         to="/dashboard/add-roommate"
//         className={({ isActive }) =>
//           `px-4 py-2 rounded-lg font-semibold transition ${
//             isActive
//               ? "bg-[#f2555d] text-white shadow"
//               : "hover:bg-[#f2555d]/10 hover:text-[#f2555d]"
//           }`
//         }
//       >
//         <div className="flex items-center gap-2">
//           <PlusCircle size={18} />
//           Add Roommate
//         </div>
//       </NavLink>

//       <NavLink
//         to="/dashboard/my-listings"
//         className={({ isActive }) =>
//           `px-4 py-2 rounded-lg font-semibold transition ${
//             isActive
//               ? "bg-[#f2555d] text-white shadow"
//               : "hover:bg-[#f2555d]/10 hover:text-[#f2555d]"
//           }`
//         }
//       >
//         <div className="flex items-center gap-2">
//           <List size={18} />
//           My Listings
//         </div>
//       </NavLink>

//     </div>
//   );
// };

// export default LeftSidebar;
















import React from 'react';
import { NavLink } from 'react-router';
import { Home, PlusCircle, List } from 'lucide-react';

const LeftSidebar = () => {
  return (
    <div className="sticky top-20 bg-[#ffeaea] text-[#f2555d] rounded-xl p-4 flex flex-col gap-4 shadow-md ">
      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg font-semibold transition ${
            isActive
              ? "bg-[#f2555d] text-white shadow"
              : "hover:bg-[#f2555d]/10 hover:text-[#f2555d]"
          }`
        }
      >
        <div className="flex items-center gap-2">
          <Home size={18} />
          <span >Overview</span>
        </div>
      </NavLink>

      <NavLink
        to="/dashboard/add-roommate"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg font-semibold transition ${
            isActive
              ? "bg-[#f2555d] text-white shadow"
              : "hover:bg-[#f2555d]/10 hover:text-[#f2555d]"
          }`
        }
      >
        <div className="flex items-center gap-2">
          <PlusCircle size={18} />
          <span>Add Roommate</span>
        </div>
      </NavLink>

      <NavLink
        to="/dashboard/my-listings"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg font-semibold transition ${
            isActive
              ? "bg-[#f2555d] text-white shadow"
              : "hover:bg-[#f2555d]/10 hover:text-[#f2555d]"
          }`
        }
      >
        <div className="flex items-center gap-2">
          <List size={18} />
          <span >My Listings</span>
        </div>
      </NavLink>
    </div>
  );
};

export default LeftSidebar;