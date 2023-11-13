import React from "react";
import style from "../app/page.module.css";

const Sidebar = (props) => {
  return (
    <div className={style.sidebar}>
      <div className={style.numbermenu}>
        <div>Number :</div>
        <ul className={`${style.cardnumber} ${style.magiccardnumber}`}>
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
          <li onClick={props.rankAll}>All-Rank</li>
          <li onClick={props.rankB}>B -Rank</li>
          <li onClick={props.rankC}>C -Rank</li>
          <li onClick={props.rankD}>D -Rank</li>
          <li onClick={props.rankE}>E -Rank</li>
          <li onClick={props.rankF}>F -Rank</li>
          <li onClick={props.rankG}>G -Rank</li>
          <li onClick={props.rankH}>H -Rank</li>
          <li onClick={props.rankSS}>SS -Rank</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
