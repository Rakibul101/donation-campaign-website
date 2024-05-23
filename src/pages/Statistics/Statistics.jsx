import StatisticsChart from "../../components/StatisticsChart/StatisticsChart";

const Statistics = () => {
  return (
    <div>
      <p className="text-2xl text-center font-bold">Your donation Chart</p>
      <div>
        <StatisticsChart></StatisticsChart>
      </div>
      <div className="text-xl flex flex-wrap items-center justify-center gap-5 ">
        {/* your donation */}
        <div className="flex items-center gap-2">
          <p>Your Danaion </p>
          <div className="w-[100px] h-4 bg-green-600"></div>
        </div>
        {/* total doanation */}
        <div className="flex items-center gap-2">
          <p>Total Donation</p>
          <div className="w-[100px] h-4 bg-red-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
