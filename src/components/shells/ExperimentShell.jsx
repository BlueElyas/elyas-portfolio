import React from "react";
import { Outlet } from "react-router-dom";

const ExperimentShell = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ExperimentShell;
