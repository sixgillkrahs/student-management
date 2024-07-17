import { Pie } from "@ant-design/plots";
import React, { memo, useEffect, useState } from "react";

const RatioChart = () => {
  // const dataMockup = [
  //   { type: "Phòng phát triển phần mềm", value: 50 },
  //   { type: "Phòng tổng hợp", value: 30 },
  //   { type: "Phòng kinh doanh", value: 20 },
  // ];
  // const [data, setData] = useState<any>([]);
  // useEffect(() => {
  //   // searchChart();
  //   setData(dataMockup);
  // }, [dataMockup]);

  const config = {
    appendPadding: 10,
    data: [
      { type: "Phòng phát triển phần mềm", value: 50 },
      { type: "Phòng tổng hợp", value: 30 },
      { type: "Phòng kinh doanh", value: 20 },
    ],
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
      // type: "inner",
      text: "value",
      // offset: "-30%",
      style: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
      },
    },
    // interactions: [{ type: "element-active" }],
  };

  return <Pie {...config} />;
};

export default memo(RatioChart);
