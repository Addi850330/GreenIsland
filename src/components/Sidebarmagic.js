import React from "react";
import style from "../app/page.module.css";

const Sidebar = (props) => {
  return (
    <div className={style.sidebar}>
      <div className={style.numbermenu}>
        <div>Number :</div>
        <ul className={`${style.cardnumber} ${style.magiccardnumber}`}>
          <li>1001~</li>
          <li>1020~</li>
          <li>~1040</li>
        </ul>
      </div>
      <div className={style.sidebarimg}>
        <img onClick={props.test} src="/icon/iconLight.png" alt="" />
      </div>
      <div className={style.rankmenu}>
        <ul>
          <li onClick={props.rankAll}>All-Rank</li>
          <li onClick={props.rankA}>A -Rank</li>
          <li onClick={props.rankB}>B -Rank</li>
          <li onClick={props.rankC}>C -Rank</li>
          <li onClick={props.rankD}>D -Rank</li>
          <li onClick={props.rankE}>E -Rank</li>
          <li onClick={props.rankF}>F -Rank</li>
          <li onClick={props.rankG}>G -Rank</li>
          <li onClick={props.rankS}>S -Rank</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
