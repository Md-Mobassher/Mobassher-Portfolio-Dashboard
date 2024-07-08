type DashboardCardProps = {
  title: string;
  statistic: number;
};

const DashboardCard = ({ title, statistic }: DashboardCardProps) => {
  console.log(title, statistic);
  return (
    <div>
      <div className="p-5 rounded-lg border shadow-lg  flex flex-col text-center py-10 ">
        <h2 className="text-2xl font-semibold ">
          {title} - <span className="text-green-500">{statistic || 0}</span>
        </h2>
      </div>
    </div>
  );
};

export default DashboardCard;
