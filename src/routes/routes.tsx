import App from "@/App";
import Home from "@/Pages/Home/Home";
import AllProjects from "@/Pages/Portfolios/AllProjects";
import ProjectDetails from "@/Pages/Portfolios/ProjectDetails";
import NotFound from "@/Shared/NotFound";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "portfolios",
        element: <AllProjects />,
      },
      {
        path: "portfolios/:name",
        element: <ProjectDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
