import React, { useState } from "react";
import style from "../app/page.module.css";

const Sidebar = (props) => {
  const [hideNumber, setHideNumber] = useState("close");
  const [hideRank, setHideRank] = useState("close");

  const opennumber = function () {
    setHideRank("close");
    if (hideNumber === "close") {
      setHideNumber("open");
    } else {
      setHideNumber("close");
    }
  };
  const rankshow = function () {
    setHideNumber("close");
    if (hideRank === "close") {
      setHideRank("open");
    } else {
      setHideRank("close");
    }
  };
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
      {/* hide-side-list */}
      <div className={style.hideside}>
        <ul className={style.hidenumberlist}>
          <div
            onClick={opennumber}
            className={
              hideNumber === "close"
                ? `${style.listtitle}`
                : `${style.listtitle} ${style.titleshow}`
            }
          >
            Num
          </div>
          <img className={style.img} src="./icon/iconLight.png" alt="" />
          <li
            onClick={props.toNumber000}
            className={
              hideNumber === "close"
                ? `${style.number}`
                : `${style.number} ${style.numbershow1}`
            }
          >
            000~
          </li>
          <li
            onClick={props.toNumber032}
            className={
              hideNumber === "close"
                ? `${style.number}`
                : `${style.number} ${style.numbershow2}`
            }
          >
            032~
          </li>
          <li
            onClick={props.toNumber064}
            className={
              hideNumber === "close"
                ? `${style.number}`
                : `${style.number} ${style.numbershow3}`
            }
          >
            064~
          </li>
        </ul>
        <ul className={style.hideranklist}>
          <div
            onClick={rankshow}
            className={
              hideRank === "close"
                ? `${style.listtitlerank}`
                : `${style.listtitlerank} ${style.rankshow}`
            }
          >
            Rank
          </div>
          <img className={style.img} src="./icon/iconLight.png" alt="" />
          <li
            onClick={props.rankAll}
            className={
              hideRank === "close"
                ? `${style.hiderank}`
                : `${style.hiderank} ${style.rankshow1}`
            }
          >
            All
          </li>
          <li
            onClick={props.rankA}
            className={
              hideRank === "close"
                ? `${style.hiderank}`
                : `${style.hiderank} ${style.rankshow2}`
            }
          >
            A
          </li>
          <li
            onClick={props.rankB}
            className={
              hideRank === "close"
                ? `${style.hiderank}`
                : `${style.hiderank} ${style.rankshow3}`
            }
          >
            B
          </li>
          <li
            onClick={props.rankD}
            className={
              hideRank === "close"
                ? `${style.hiderank}`
                : `${style.hiderank} ${style.rankshow4}`
            }
          >
            D
          </li>
          <li
            onClick={props.rankS}
            className={
              hideRank === "close"
                ? `${style.hiderank}`
                : `${style.hiderank} ${style.rankshow5}`
            }
          >
            S
          </li>
          <li
            onClick={props.rankSS}
            className={
              hideRank === "close"
                ? `${style.hiderank}`
                : `${style.hiderank} ${style.rankshow6}`
            }
          >
            SS
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
