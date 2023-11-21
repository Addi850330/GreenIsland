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
    <>
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
      {/* hide-side-list */}
      <div className={style.hideside}>
        <ul className={style.hidenumberlist}>
          <div
            onClick={opennumber}
            className={
              hideNumber === "open"
                ? `${style.listtitle} ${style.titleshow}`
                : `${style.listtitle} `
            }
          >
            Num
          </div>
          <img
            className={
              hideNumber === "open"
                ? `${style.img} ${style.opacity}`
                : `${style.img}`
            }
            src="./icon/iconLight.png"
            alt=""
          />

          <li
            className={
              hideNumber === "close"
                ? `${style.number}`
                : `${style.number} ${style.numbershow2}`
            }
          >
            -NaN-
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
          <img
            className={
              hideRank === "close"
                ? `${style.img}`
                : `${style.img} ${style.opacity}`
            }
            src="./icon/iconLight.png"
            alt=""
          />
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
            onClick={props.rankB}
            className={
              hideRank === "close"
                ? `${style.hiderank}`
                : `${style.hiderank} ${style.rankshow2}`
            }
          >
            B
          </li>
          <li
            onClick={props.rankC}
            className={
              hideRank === "close"
                ? `${style.hiderank}`
                : `${style.hiderank} ${style.rankshow3}`
            }
          >
            C
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
            onClick={props.rankE}
            className={
              hideRank === "close"
                ? `${style.hiderank}`
                : `${style.hiderank} ${style.rankshow5}`
            }
          >
            E
          </li>
          <li
            onClick={props.rankF}
            className={
              hideRank === "close"
                ? `${style.hiderank}`
                : `${style.hiderank} ${style.rankshow6}`
            }
          >
            F
          </li>
          <li
            onClick={props.rankG}
            className={
              hideRank === "close"
                ? `${style.hiderank}`
                : `${style.hiderank} ${style.rankshow7}`
            }
          >
            G
          </li>
          <li
            onClick={props.rankH}
            className={
              hideRank === "close"
                ? `${style.hiderank}`
                : `${style.hiderank} ${style.rankshow8}`
            }
          >
            H
          </li>
          <li
            onClick={props.rankSS}
            className={
              hideRank === "close"
                ? `${style.hiderank}`
                : `${style.hiderank} ${style.rankshow9}`
            }
          >
            SS
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
