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
          <li
            className={props.rank === "all" ? `${style.rank} ` : ``}
            onClick={props.rankAll}
          >
            All-Rank
          </li>
          <li
            className={props.rank === "A" ? `${style.rank} ` : ``}
            onClick={props.rankA}
          >
            A -Rank
          </li>
          <li
            className={props.rank === "B" ? `${style.rank} ` : ``}
            onClick={props.rankB}
          >
            B -Rank
          </li>
          <li
            className={props.rank === "D" ? `${style.rank} ` : ``}
            onClick={props.rankD}
          >
            D -Rank
          </li>
          <li
            className={props.rank === "S" ? `${style.rank} ` : ``}
            onClick={props.rankS}
          >
            S -Rank
          </li>
          <li
            className={props.rank === "SS" ? `${style.rank} ` : ``}
            onClick={props.rankSS}
          >
            SS -Rank
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
