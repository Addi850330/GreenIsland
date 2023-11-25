"use client";
import React from "react";
import style from "../app/page.module.css";
import Link from "next/link";
const CardInfo = (props) => {
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
              href={props.imgorigin}
              target="_blank"
            >
              Download
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
      </div>
    </>
  );
};

export default CardInfo;
