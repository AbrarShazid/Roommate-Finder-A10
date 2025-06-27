// import React from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import LeftSidebar from '../Components/DashBoard/LeftSidebar';
// import { Outlet } from 'react-router';

// const DashboardLayout = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />

//       <main className="flex-grow max-w-7xl mx-auto px-4 py-3  w-full">
//         <div className='grid grid-cols-5 gap-4 '>

//           <div className='col-span-1 min-h-[85vh] '>
//             <LeftSidebar ></LeftSidebar>
//           </div>

//           <div className='col-span-4'>
//             <Outlet ></Outlet>
//           </div>




//         </div>

//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default DashboardLayout;












import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import LeftSidebar from '../Components/DashBoard/LeftSidebar';
import { Outlet } from 'react-router';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 py-3 w-full">
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-4'>
          {/* Mobile-first: full width, then sidebar becomes 1/5 on medium screens */}
          <div className='lg:col-span-1'>
            <LeftSidebar />
          </div>

          <div className='lg:col-span-4'>
            <Outlet />
          </div>
        </div>
      </main>        


      

      <Footer />
    </div>
  );
};

export default DashboardLayout;