import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
const Main = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Main;
