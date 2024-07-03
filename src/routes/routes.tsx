import App from "@/App";
import Home from "@/Pages/Home/Home";
import Login from "@/Pages/Login/Login";
import AllProjects from "@/Pages/Portfolios/AllProjects";
import ProjectDetails from "@/Pages/Portfolios/ProjectDetails";
import NotFound from "@/components/NotFound";
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
        path: "portfolios/:projectName",
        element: <ProjectDetails />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
