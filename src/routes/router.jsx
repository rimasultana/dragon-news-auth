import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayOut from "../layouts/AuthLayOut";
import Login from "../pages/Login";
import Register from "../pages/Register";
// import NewsDetails from "../pages/NewsDetails";
import PrivateRouter from "./PrivatRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news/:id",
    element: <PrivateRouter/>,
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },
  {
    path: "auth",
    element: <AuthLayOut></AuthLayOut>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Error: Page Not Found</h1>,
  },
]);

export default router;
