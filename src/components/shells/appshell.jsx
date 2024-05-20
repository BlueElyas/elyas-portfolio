import React from "react";
import Footer from "../main/footer";
import { Outlet } from "react-router-dom";

const AppShell = () => {
  return (
    <div className="bg-softGray pt-1">
      {/* <Header /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppShell;
