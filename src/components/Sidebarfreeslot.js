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
        <ul className={`${style.cardnumber} ${style.magiccardnumber}`}>
          <li onClick={hello}>1001~</li>
          <li>1020~</li>
          <li>~1040</li>
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
          <li>C -Rank</li>
          <li>D -Rank</li>
          <li>E -Rank</li>
          <li>F -Rank</li>
          <li>G -Rank</li>
          <li>S -Rank</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
