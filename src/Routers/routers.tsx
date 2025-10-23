import { createBrowserRouter } from "react-router";
import { ErrorPage } from "@templates";
import { Home, ListUsers, RegisterUser, UserData } from "@pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage numberError={404} message="No pudimos localizar" />,
    children:[
      {
        path: "/",
        element: <ListUsers />
      },
      {
        path: "/register",
        element: <RegisterUser />
      },
      {
        path: "/User/:id/:box",
        element: <UserData />
      },
    ]
  },
]);