import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import HomeLayOut from "../Layouts/HomeLayOut";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

import Error from "../Pages/Error";
import PrivateRoute from "../provider/PrivateRouter";
import AddRoommate from "../Pages/AddRoommate";
import RoommateDetails from "../Pages/RoommateDetails";
import BrowseListings from "../Pages/BrowseListings";
import MyListings from "../Pages/MyListings";
import UpdateList from "../Pages/UpdateList";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import Support from "../Pages/Support";

import DashboardLayout from "../Layouts/DashboardLayout"
import Overview from "../Pages/Overview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut></HomeLayOut>,
    children: [
      {
        index: true,
        
        loader: () => fetch("https://roommate-finder-a10-server.vercel.app/featured-roommates"),
        Component: Home,
      },

     
      {
        path: "/roommate/:id",
        element: (
          <PrivateRoute>
            <RoommateDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://roommate-finder-a10-server.vercel.app/roommate/${params.id}`),
      },

      {
        path: "/browse-listings",
    
        element: <BrowseListings />,
      },
      {
        path: "/aboutUs",
        Component:AboutUs
      },
      {
        path: "/contact",
        Component:Contact
      },
      {
        path: "/support",
        Component:Support
      },
     

      { 
        path: "/update/:id",


        loader:({params})=>fetch(`https://roommate-finder-a10-server.vercel.app/update/${params.id}`),
        element:<PrivateRoute>
          <UpdateList></UpdateList>
        </PrivateRoute>


      }


    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
{
  path:'/dashboard',
  Component:DashboardLayout,

  children:[

    {
      index:true,
      Component:Overview
    },
    {
      path: "/dashboard/add-roommate",
      element: (
        <PrivateRoute>
          <AddRoommate></AddRoommate>
        </PrivateRoute>
      ),
    },

    {
      path:"/dashboard/my-listings",
      element:<PrivateRoute>
        <MyListings></MyListings>
      </PrivateRoute>
    },




  ]

},



  {
    path: "*",
    Component: Error,
  },
]);

export default router;
