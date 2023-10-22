import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomeScreen from "../page/HomeScreen";
import ProjectScreen from "../page/ProjectScreen";
import DetailedProjectScreen from "../page/DetailProject";
import CreateProjectScreen from "../page/CreateProject";
import Registeration from "../page/auth/Registeration";
import SignIn from "../page/auth/SignIn";
import ConfirmAccount from "../page/auth/ConfirmAccount";
import PrivateRoute from "./PrivateRoute";
import SettingScreen from "../page/SettingScreen";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        index: true,
        path: ":id/project",
        element: <ProjectScreen />,
      },
      {
        index: true,
        path: ":id/project/:productID/detailed-project",
        element: <DetailedProjectScreen />,
      },
      {
        index: true,
        path: "create-project",
        element: <CreateProjectScreen />,
      },
      {
        index: true,
        path: "setting",
        element: <SettingScreen />,
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
    path: "/:token/sign-in",
    element: <SignIn />,
  },
  // {
  //   index: true,
  //   path: "/reset",
  //   element: <ResetScreen />,
  // },
  {
    index: true,
    path: "/confirm-account",
    element: <ConfirmAccount />,
  },
]);
