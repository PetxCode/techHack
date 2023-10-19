import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomeScreen from "../page/HomeScreen";
import ProjectScreen from "../page/ProjectScreen";
import DetailedProjectScreen from "../page/DetailProject";
import CreateProjectScreen from "../page/CreateProject";

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
]);
