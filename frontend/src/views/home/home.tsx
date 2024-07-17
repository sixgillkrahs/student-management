import React from "react";
import AreaChart from "./chart/areachart";
import BarChart from "./chart/barchart";
import RatioChart from "./chart/ratiochart";

const HomeViews = () => {
  return (
    <div className="container">
      <div className="flex w-full px-6 py-4">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold">
            Biểu đồ thống kê lượng sinh viên nghỉ học
          </h2>
          <RatioChart />
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl font-bold">
            Biểu đồ đánh giá lượng điểm học tập
          </h2>
          <RatioChart />
        </div>
      </div>
    </div>
  );
};

export default HomeViews;
