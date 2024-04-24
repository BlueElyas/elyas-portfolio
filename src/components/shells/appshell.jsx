import React from "react";
import Header from "../main/header";
import Footer from "../main/footer";
import { Outlet } from "react-router-dom";

const AppShell = () => {
  return (
    <React.Fragment>
      <Header />
      <main main className="flex flex-col items-center">
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default AppShell;
