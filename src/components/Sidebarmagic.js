import React from "react";
import style from "../app/page.module.css";

const Sidebar = (props) => {
  return (
    <div className={style.sidebar}>
      <div className={style.numbermenu}>
        <div>Number :</div>
        <ul className={`${style.cardnumber} ${style.magiccardnumber}`}>
          <li onClick={props.toNumber1001}>1001~</li>
          <li onClick={props.toNumber1021}>1021~</li>
          <li onClick={props.toNumber1040}>~1040</li>
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
            className={props.rank === "S" ? `${style.rank} ` : ``}
            onClick={props.rankS}
          >
            S -Rank
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
