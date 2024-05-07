import React from "react";
import { Outlet } from "react-router-dom";

const ExperimentShell = () => {
  return (
    <div>
      {/* Navigation */}
      <Outlet />
    </div>
  );
};

export default ExperimentShell;
