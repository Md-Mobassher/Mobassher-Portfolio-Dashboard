import App from "@/App";
import Home from "@/Pages/Home/Home";
import ProjectDetails from "@/Pages/Projects/ProjectDetails";
import Projects from "@/Pages/Projects/Projects";
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
        element: <Projects />,
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
