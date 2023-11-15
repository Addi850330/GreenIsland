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
          <li
            className={props.rank === "all" ? `${style.rank} ` : ``}
            onClick={props.rankAll}
          >
            All-Rank
          </li>
          <li
            className={props.rank === "B" ? `${style.rank} ` : ``}
            onClick={props.rankB}
          >
            B -Rank
          </li>
          <li
            className={props.rank === "C" ? `${style.rank} ` : ``}
            onClick={props.rankC}
          >
            C -Rank
          </li>
          <li
            className={props.rank === "D" ? `${style.rank} ` : ``}
            onClick={props.rankD}
          >
            D -Rank
          </li>
          <li
            className={props.rank === "E" ? `${style.rank} ` : ``}
            onClick={props.rankE}
          >
            E -Rank
          </li>
          <li
            className={props.rank === "F" ? `${style.rank} ` : ``}
            onClick={props.rankF}
          >
            F -Rank
          </li>
          <li
            className={props.rank === "G" ? `${style.rank} ` : ``}
            onClick={props.rankG}
          >
            G -Rank
          </li>
          <li
            className={props.rank === "H" ? `${style.rank} ` : ``}
            onClick={props.rankH}
          >
            H -Rank
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
