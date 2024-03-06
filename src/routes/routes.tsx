import App from "@/App";
import ProjectDetails from "@/Pages/Projects/ProjectDetails";
import NotFound from "@/Shared/NotFound";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
