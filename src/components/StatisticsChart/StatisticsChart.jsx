import React, {
  PureComponent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { AllDataContext } from "../LayOut/LayOut";
const StatisticsChart = () => {
  const [donationData, setDonationData] = useState();
  //   ls data
  const [lsDonationData, setLsDonationData] = useState();
  const allData = useContext(AllDataContext);
  //   console.log(allData);
  const lsData = JSON.parse(localStorage.getItem("donationRakib"));
  useEffect(() => {
    setDonationData(allData);
    setLsDonationData(lsData);
  }, [allData, lsData]);

  const data = [
    { name: "Group A", value: donationData?.length },
    { name: "Group B", value: lsDonationData?.length },
  ];

  const COLORS = ["#FF444A", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="text-xl font-semibold flex justify-center items-center ">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default StatisticsChart;
