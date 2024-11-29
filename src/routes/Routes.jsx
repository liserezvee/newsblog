import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import About from "../pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path:'/',
            element: <Home></Home>,
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<SignUp></SignUp>
        },
        {
          path: "/about",
          element: <About></About>
        }
    ]
  },
]);

export default router
