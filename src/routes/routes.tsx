import App from "@/App";
import Home from "@/Pages/Home/Home";
import Login from "@/Pages/Login/Login";
import AllProjects from "@/Pages/Portfolios/AllProjects";
import ProjectDetails from "@/Pages/Portfolios/ProjectDetails";
import NotFound from "@/components/NotFound";
import DashboardLayout from "@/components/layout/DashboardLayout";
// import ProtectedRoute from "@/components/layout/ProtectedRoute";
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
    path: "/dashboard",
    element: (
      // <ProtectedRoute role={`${"admin" || "super_admin"}`}>
      <DashboardLayout />
      // </ProtectedRoute>
    ),
    // children: [
    //   {
    //     index: true,
    //     element: <AdminDashboard />,
    //   },
    //   {
    //     path: "dashboard", // it shows in /admin/dashboard route
    //     element: <AdminDashboard />,
    //   },
    //   {
    //     path: "crate-admin",
    //     element: <CreateAdmin />,
    //   },
    // ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
