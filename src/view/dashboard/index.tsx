import React from "react";
import Frame11 from "../../assets/Frame 11.png";

import Frame5 from "../../assets/Frame 5.png";
import Frame6 from "../../assets/Frame 6.png";
import Frame7 from "../../assets/Frame 7.png";
import Frame8 from "../../assets/Frame 8.png";

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-center  gap-4">
        <img src={Frame11} alt="Frame 11" />
      </div>
      <div className="flex justify-center  gap-10">
        <img src={Frame5} alt="Frame 5" className="w-1/3 max-w-xs h-auto" />
        <img src={Frame6} alt="Frame 6" className="w-1/3 max-w-xs h-auto" />
        <img src={Frame7} alt="Frame 7" className="w-1/3 max-w-xs h-auto" />
      </div>
      <div className="flex justify-center  ">
        <img src={Frame8} alt="Frame 8" />
      </div>
    </div>
  );
};

export default Dashboard;
