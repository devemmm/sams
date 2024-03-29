import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import constants from "../../libs/constants";

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

const BarchartAnalysis = (props) => {
  console.log(props.data)
  return (
    <PieChart width={250} height={250}>
      <Pie
        data={props.data}
        cx={120}
        cy={120}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {props.data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={constants.COLORS[index % constants.COLORS.length]}
          />
        ))}
      </Pie>
    </PieChart>
  );
};

export default BarchartAnalysis;
