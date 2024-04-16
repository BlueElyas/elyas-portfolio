import React from "react";
import Header from "../main/header";
import Footer from "../main/footer";
import { Outlet } from "react-router-dom";

const AppShell = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppShell;
