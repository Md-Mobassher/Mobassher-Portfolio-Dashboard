import App from "@/App";
import BlogManagement from "@/Pages/Admin/BlogManagement";
import ContactManagement from "@/Pages/Admin/ContactManagement";
import Dashboard from "@/Pages/Admin/Dashboard";
import ProjectManagement from "@/Pages/Admin/ProjectManagement";
import SkillManagement from "@/Pages/Admin/SkillManagement";
import TestimonialManagement from "@/Pages/Admin/TestimonialManagement";
import UserManagement from "@/Pages/Admin/UserManagement";
import Home from "@/Pages/Home/Home";
import Login from "@/Pages/Login/Login";
import AllProjects from "@/Pages/Portfolios/AllProjects";
import ProjectDetails from "@/Pages/Portfolios/ProjectDetails";
import NotFound from "@/components/NotFound";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
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
      <ProtectedRoute role="super_admin">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "skill-management",
        element: <SkillManagement />,
      },
      {
        path: "project-management",
        element: <ProjectManagement />,
      },
      {
        path: "testimonials-management",
        element: <TestimonialManagement />,
      },
      {
        path: "user-management",
        element: <UserManagement />,
      },
      {
        path: "blog-management",
        element: <BlogManagement />,
      },
      {
        path: "contact-management",
        element: <ContactManagement />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
