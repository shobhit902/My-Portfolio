import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Header/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
