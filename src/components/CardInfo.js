"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import style from "../app/page.module.css";
import Link from "next/link";
const CardInfo = (props) => {
  const pathname = usePathname();
  const [page, setPage] = useState("");

  useEffect(() => {
    if (pathname === "/specifycard") {
      setPage("specifycard");
    }
    if (pathname === "/magiccard") {
      setPage("magiccard");
    }
    if (pathname === "/managercard") {
      setPage("managercard");
    }
    if (pathname === "freeslot") {
      setPage("freeslot");
    }
  }, []);

  return (
    <>
      <div
        onClick={props.close}
        className={
          props.windowSwitch === "close"
            ? `${style.blackbgccl}`
            : `${style.blackbgcop}`
        }
      ></div>
      <div
        className={
          props.windowSwitch === "close"
            ? `${style.cardboard} ${style.close}`
            : `${style.cardboard}`
        }
      >
        <div
          onClick={props.cardprevious}
          className={
            props.previousArrow === "show"
              ? `${style.previous}`
              : `${style.previous} ${style.previousArrow}`
          }
        >
          <img src="./icon/arrow.png" alt="" />
        </div>
        <div className={style.close}>
          <button onClick={props.close}>X</button>
        </div>
        <div className={style.cardboardInfo}>
          <div className={style.cbimg}>
            <div className={style.cbimgset}>
              <img
                className={style.backimg}
                src="./img/cardbackold.png"
                alt=""
              />
              <img className={style.frontimg} src={props.img} alt="" />
            </div>
            <Link
              className={style.imglink}
              href={`/${page}/${props.id}`}
              target="_blank"
              rel="noopener"
            >
              Card-Page
            </Link>
          </div>
          <div className={style.cbicon}>
            <img className={style.img} src="./icon/iconLight.png" alt="" />
          </div>
          <div className={style.cbtext}>
            <div>{props.name}</div>
            <div>Rank : {props.rank}</div>
            <div>Number : {props.number}</div>
            <div>
              Information:
              <p>{props.description}</p>
            </div>
          </div>
        </div>
        <div
          onClick={props.cardnext}
          className={
            props.nextArrow === "show"
              ? `${style.next}`
              : `${style.next} ${style.nextArrowHide}`
          }
        >
          <img src="./icon/arrow.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default CardInfo;
