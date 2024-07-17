import { Area } from "@ant-design/plots";
import React from "react";

const AreaChart = () => {
  const data = [
    {
      Date: "00",
      scales: 100,
    },
    {
      Date: "01",
      scales: 400,
    },
    {
      Date: "02",
      scales: 600,
    },
    {
      Date: "03",
      scales: 1200,
    },
    {
      Date: "04",
      scales: 600,
    },
    {
      Date: "05",
      scales: 1600,
    },
    {
      Date: "06",
      scales: 1000,
    },
    {
      Date: "07",
      scales: 1860,
    },
    {
      Date: "08",
      scales: 900,
    },
    {
      Date: "09",
      scales: 0,
    },
  ];

  const config = {
    data,
    xField: "Date",
    yField: "scales",
    label: false as any,
    xAxis: false as any,
    yAxis: false as any,
    line: false as any,
    areaStyle: () => {
      return {
        // fill
      };
    },
    animation: {
      appear: {
        animation: "wave-in",
        duration: 2500,
      },
    },
  };

  return <Area {...config} />;
};

export default AreaChart;
