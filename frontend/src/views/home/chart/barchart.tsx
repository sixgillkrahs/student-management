import { Bar } from "@ant-design/plots";
import React, { useEffect, useState } from "react";

const BarChart = () => {
  const [data, setData] = useState<any[]>([]);
  const dataMockup = [
    {
      reason: "Phòng phát trển phần mềm",
      value: 10,
    },
    {
      reason: "Phòng kinh doanh",
      value: 16,
    },
  ];

  useEffect(() => {
    setData(dataMockup);
  }, []);

  const config = {
    data,
    xField: "reason",
    yField: "value",
    colorField: "reason",
    tooltip: {
      formatter: (datum: any) => {
        return { name: "Chưa chuẩn hóa", value: datum.value };
      },
    },
    animation: {
      appear: {
        animation: "path-in",
        duration: 2500,
      },
    },
    areaStyle: () => {
      return {
        fill: "l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff",
      };
    },
  };

  return <Bar {...config} />;
};

export default BarChart;
