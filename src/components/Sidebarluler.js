import React from "react";
import style from "../app/page.module.css";

const Sidebar = (props) => {
  return (
    <div className={style.sidebar}>
      <div className={`${style.numbermenu} ${style.lulernumbermenu}`}>
        <div>Number :</div>
        <ul className={style.cardnumber}>
          <li>NaN</li>
          <li>NaN</li>
          <li>NaN</li>
        </ul>
      </div>
      <div className={style.sidebarimg}>
        <img onClick={props.test} src="/icon/iconLight.png" alt="" />
      </div>
      <div className={style.rankmenu}>
        <ul>
          <li
            className={
              props.rank === "all" ? `${style.rank} ${style.lulerrankmenu}` : ``
            }
            onClick={props.rankAll}
          >
            All-Rank
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
