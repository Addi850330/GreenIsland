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
        <div className={style.numbermenu}>
          <div>Number :</div>
          <ul className={`${style.cardnumber} ${style.magiccardnumber}`}>
            <li onClick={props.toNumber1001}>1001~</li>
            <li onClick={props.toNumber1021}>1021~</li>
            <li onClick={props.toNumber1040}>~1040</li>
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
            onClick={(e) => {
              chocenum(e);
              props.toNumber1001();
            }}
            className={
              hideNumber === "close"
                ? `${style.number}`
                : `${style.number} ${style.numbershow1}`
            }
          >
            1001~
          </li>
          <li
            onClick={(e) => {
              chocenum(e);
              props.toNumber1021();
            }}
            className={
              hideNumber === "close"
                ? `${style.number}`
                : `${style.number} ${style.numbershow2}`
            }
          >
            1021~
          </li>
          <li
            onClick={(e) => {
              chocenum(e);
              props.toNumber1040();
            }}
            className={
              hideNumber === "close"
                ? `${style.number}`
                : `${style.number} ${style.numbershow3}`
            }
          >
            ~1040
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
                : `${style.hiderank} ${style.rankshow1}`
            }
          >
            All
          </li>
          <li
            onClick={(e) => {
              chocerank(e);
              props.rankA();
            }}
            className={
              hideRank === "close"
                ? `${style.hiderank}`
                : `${style.hiderank} ${style.rankshow2}`
            }
          >
            A
          </li>
          <li
            onClick={(e) => {
              chocerank(e);
              props.rankB();
            }}
            className={
              hideRank === "close"
                ? `${style.hiderank}`
                : `${style.hiderank} ${style.rankshow3}`
            }
          >
            B
          </li>
          <li
            onClick={(e) => {
              chocerank(e);
              props.rankC();
            }}
            className={
              hideRank === "close"
                ? `${style.hiderank}`
                : `${style.hiderank} ${style.rankshow4}`
            }
          >
            C
          </li>
          <li
            onClick={(e) => {
              chocerank(e);
              props.rankD();
            }}
            className={
              hideRank === "close"
                ? `${style.hiderank}`
                : `${style.hiderank} ${style.rankshow5}`
            }
          >
            D
          </li>
          <li
            onClick={(e) => {
              chocerank(e);
              props.rankE();
            }}
            className={
              hideRank === "close"
                ? `${style.hiderank}`
                : `${style.hiderank} ${style.rankshow6}`
            }
          >
            E
          </li>
          <li
            onClick={(e) => {
              chocerank(e);
              props.rankF();
            }}
            className={
              hideRank === "close"
                ? `${style.hiderank}`
                : `${style.hiderank} ${style.rankshow7}`
            }
          >
            F
          </li>
          <li
            onClick={(e) => {
              chocerank(e);
              props.rankG();
            }}
            className={
              hideRank === "close"
                ? `${style.hiderank}`
                : `${style.hiderank} ${style.rankshow8}`
            }
          >
            G
          </li>
          <li
            onClick={(e) => {
              chocerank(e);
              props.rankS();
            }}
            className={
              hideRank === "close"
                ? `${style.hiderank}`
                : `${style.hiderank} ${style.rankshow9}`
            }
          >
            S
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
