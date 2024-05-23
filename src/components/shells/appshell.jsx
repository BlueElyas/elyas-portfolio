import React from "react";
import Footer from "../main/footer";
import { Outlet } from "react-router-dom";
import styles from "./appshell.module.css";

const AppShell = () => {
  return (
    <div
      className={`bg-custom-gradient animate-gradient-x h-full text-white ${styles.wrapper} [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]`}
    >
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppShell;
