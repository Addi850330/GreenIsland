"use client";
import React from "react";
import Sidebar from "../../components/Sidebarfreeslot";
import style from "../page.module.css";
const page = () => {
  return (
    <>
      <Sidebar></Sidebar>

      <div className={style.card}>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          optio cupiditate inventore enim eaque, harum nam laborum fugit
          provident eum possimus, cumque numquam iusto repellat ea dolorum
          repellendus quae eligendi.
        </div>
      </div>
    </>
  );
};

export default page;
