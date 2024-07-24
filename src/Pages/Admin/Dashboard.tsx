/* eslint-disable no-unsafe-optional-chaining */
import Loading from "@/components/Loading";
import DashboardCard from "@/components/ui/DashboardCard";
import { useGetAllStatisticsQuery } from "@/redux/features/admin/adminManagementApi";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { data, isLoading } = useGetAllStatisticsQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }
  // console.log(data);
  const {
    totalSkills,
    totalUsers,
    totalProjects,
    totalBlogPosts,
    totalTestimonials,
    totalMessages,
  } = data?.data || {};

  return (
    <div>
      <h2 className="text-2xl text-center font-semibold text-green-500">
        Welcome to Md Mobassher Portfolio Dashboard
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:gap-5 gap-3 my-10">
        <Link to={"/dashboard/skill-management"}>
          <DashboardCard title="Total Skills" statistic={totalSkills} />
        </Link>

        <Link to={"/dashboard/project-management"}>
          <DashboardCard title="Total Projects" statistic={totalProjects} />
        </Link>
        <Link to={"/dashboard/blog-management"}>
          <DashboardCard title="Total Blog Post" statistic={totalBlogPosts} />
        </Link>
        <Link to={"/dashboard/testimonials-management"}>
          <DashboardCard
            title="Total Testimonials"
            statistic={totalTestimonials}
          />
        </Link>
        <Link to={"/dashboard/contact-management"}>
          <DashboardCard title="Total Message" statistic={totalMessages} />
        </Link>
        <Link to={"/dashboard/user-management"}>
          <DashboardCard title="Total User" statistic={totalUsers} />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
