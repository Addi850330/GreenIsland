import React, { useState } from "react";
import Image from "next/image";
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
  const chocenum = function () {
    setHideNumber("close");
  };
  const chocerank = function () {
    setHideRank("close");
  };
  return (
    <>
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
          <Image
            width={100}
            height={100}
            onClick={props.test}
            src="/icon/iconLight.png"
            alt=""
          />
        </div>
        <div className={style.rankmenu}>
          <ul>
            <li
              className={
                props.rank === "all"
                  ? `${style.rank} ${style.lulerrankmenu}`
                  : ``
              }
              onClick={props.rankAll}
            >
              All-Rank
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
          <Image
            width={100}
            height={100}
            className={
              hideNumber === "open"
                ? `${style.img} ${style.opacity}`
                : `${style.img}`
            }
            src="/icon/iconLight.png"
            alt=""
          />

          <li
            onClick={chocenum}
            className={
              hideNumber === "close"
                ? `${style.number}`
                : `${style.number} ${style.numbershow2}`
            }
          >
            - NaN -
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
          <Image
            width={100}
            height={100}
            className={
              hideRank === "close"
                ? `${style.img}`
                : `${style.img} ${style.opacity}`
            }
            src="/icon/iconLight.png"
            alt=""
          />
          <li
            onClick={(e) => {
              chocerank(e);
              props.rankAll();
            }}
            className={
              hideRank === "close"
                ? `${style.hiderank}`
                : `${style.hiderank} ${style.rankshow2}`
            }
          >
            All
          </li>
        </ul>
        <div
          onClick={rankshow}
          className={
            hideRank === "close"
              ? `${style.rankshowbg} ${style.rankbgclose}`
              : `${style.rankshowbg} `
          }
        ></div>
        <div
          onClick={opennumber}
          className={
            hideNumber === "close"
              ? `${style.numbershowbg} ${style.numberbgclose}`
              : `${style.numbershowbg} `
          }
        ></div>
      </div>
    </>
  );
};

export default Sidebar;
