import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomeScreen from "../page/HomeScreen";
import ProjectScreen from "../page/ProjectScreen";
import DetailedProjectScreen from "../page/DetailProject";
import CreateProjectScreen from "../page/CreateProject";
import Registeration from "../page/auth/Registeration";
import SignIn from "../page/auth/SignIn";
import ResetScreen from "../page/auth/Register/ResetScreen";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        index: true,
        path: "project",
        element: <ProjectScreen />,
      },
      {
        index: true,
        path: "detailed-project",
        element: <DetailedProjectScreen />,
      },
      {
        index: true,
        path: "create-project",
        element: <CreateProjectScreen />,
      },
    ],
  },
  {
    index: true,
    path: "register",
    element: <Registeration />,
  },
  {
    index: true,
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    index: true,
    path: "/reset",
    element: <ResetScreen />,
  },
]);
