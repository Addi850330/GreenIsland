"use client";
import React, { Children } from "react";
import Sidebar from "../../components/Sidebar";
import style from "../page.module.css";
const page = () => {
  return (
    <>
      <Sidebar />
      <div data-aos="fade-up" className={style.card}>
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
