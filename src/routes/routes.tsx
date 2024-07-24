import App from "@/App";
import BlogManagement from "@/Pages/Admin/BlogManagement/BlogManagement";
import ContactManagement from "@/Pages/Admin/ContactManagement/ContactManagement";
import Dashboard from "@/Pages/Admin/Dashboard";
import ProjectManagement from "@/Pages/Admin/ProjectManagement/ProjectManagement";
import TestimonialManagement from "@/Pages/Admin/TestimonialManagement/TestimonialManagement";
import SkillManagement from "@/Pages/Admin/SkillManagement/SkillManagement";
import Home from "@/Pages/Home/Home";
import Login from "@/Pages/Login/Login";
import NotFound from "@/components/NotFound";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import { createBrowserRouter } from "react-router-dom";
import UserManagement from "@/Pages/Admin/UserManagement/UserManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute role="super_admin">
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
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
        path: "blog-management",
        element: <BlogManagement />,
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
