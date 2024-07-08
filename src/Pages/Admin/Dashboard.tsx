import Loading from "@/components/Loading";
import { useGetAllStatisticsQuery } from "@/redux/features/admin/adminManagementApi";

const Dashboard = () => {
  const { data, isLoading } = useGetAllStatisticsQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }
  console.log(data);

  return (
    <div>
      <h2 className="text-2xl text-center font-semibold text-green-500">
        Welcome to Md Mobassher Portfolio Dashboard
      </h2>
    </div>
  );
};

export default Dashboard;
