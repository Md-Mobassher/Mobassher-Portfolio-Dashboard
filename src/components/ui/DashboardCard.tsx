type DashboardCardProps = {
  title: string;
  statistic: number;
};

const DashboardCard = ({ title, statistic }: DashboardCardProps) => {
  // console.log(title, statistic);
  return (
    <div className="lg:p-5 p-4 rounded-lg border border-gray-300 hover:border-green-500 hover:bg-green-400 hover:text-white flex flex-col text-center bg-white lg:py-10 py-8">
      <h2 className="lg:text-2xl md:text-2xl text-xl font-semibold ">
        {title} - <span className=" font-bold">{statistic || 0}</span>
      </h2>
    </div>
  );
};

export default DashboardCard;
