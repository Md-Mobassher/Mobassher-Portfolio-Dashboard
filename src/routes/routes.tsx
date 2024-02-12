import App from "@/App";
import ProjectDetails from "@/Pages/Projects/ProjectDetails";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:name",
    element: <ProjectDetails />,
  },
]);

export default router;
