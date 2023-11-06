"use client";
import React from "react";
import style from "../app/page.module.css";

const Sidebar = () => {
  const hello = function () {
    console.log("123");
  };
  return (
    <div className={style.sidebar}>
      <div className={`${style.numbermenu} ${style.lulernumbermenu}`}>
        <div>Number :</div>
        <ul className={style.cardnumber}>
          <li onClick={hello}>NaN</li>
          <li onClick={hello}>NaN</li>
          <li onClick={hello}>NaN</li>
        </ul>
      </div>
      <div className={style.sidebarimg}>
        <img src="/icon/iconLight.png" alt="" />
      </div>
      <div className={style.rankmenu}>
        <ul>
          <li className={style.lulerrankmenu} onClick={hello}>
            All-Rank
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
