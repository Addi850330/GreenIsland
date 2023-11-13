import React from "react";
import style from "../app/page.module.css";

const Sidebar = (props) => {
  return (
    <div className={style.sidebar}>
      <div className={style.numbermenu}>
        <div>Number :</div>
        <ul className={style.cardnumber}>
          <li onClick={props.toNumber000}>000~</li>
          <li onClick={props.toNumber032}>032~</li>
          <li onClick={props.toNumber064}>064~</li>
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
          <li onClick={props.rankD}>D -Rank</li>
          <li onClick={props.rankS}>S -Rank</li>
          <li onClick={props.rankSS}>SS -Rank</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
