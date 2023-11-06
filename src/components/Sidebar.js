import React from "react";
import style from "../app/page.module.css";

const Sidebar = () => {
  const hello = function () {
    console.log("123");
  };
  return (
    <div className={style.sidebar}>
      <div className={style.numbermenu}>
        <div>Number :</div>
        <ul className={style.cardnumber}>
          <li onClick={hello}>000~</li>
          <li>032~</li>
          <li>064~</li>
        </ul>
      </div>
      <div className={style.sidebarimg}>
        <img src="/icon/iconLight.png" alt="" />
      </div>
      <div className={style.rankmenu}>
        <ul>
          <li onClick={hello}>All-Rank</li>
          <li>A -Rank</li>
          <li>B -Rank</li>
          <li>D -Rank</li>
          <li>S -Rank</li>
          <li>SS -Rank</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
