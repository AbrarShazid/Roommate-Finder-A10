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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut></HomeLayOut>,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/featured-roommates"),
        Component: Home,
      },

      {
        path: "/add-roommate",
        element: (
          <PrivateRoute>
            <AddRoommate></AddRoommate>
          </PrivateRoute>
        ),
      },
      {
        path: "/roommate/:id",
        element: (
          <PrivateRoute>
            <RoommateDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/roommate/${params.id}`),
      },

      {
        path: "/browse-listings",
        loader: () => fetch("http://localhost:3000/roommates"),
        element: <BrowseListings />,
      },
      {
        path:"/my-listings",
        element:<PrivateRoute>
          <MyListings></MyListings>
        </PrivateRoute>
      },

      { 
        path: "/update/:id",


        loader:({params})=>fetch(`http://localhost:3000/update/${params.id}`),
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
    path: "*",
    Component: Error,
  },
]);

export default router;
