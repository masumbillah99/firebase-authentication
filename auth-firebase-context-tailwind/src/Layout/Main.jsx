import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
const Main = () => {
  return (
    <div className="">
      <Header></Header>
      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Main;
