"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
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
  const test = function () {
    console.log(typeof props.img);
  };

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
          <Image
            width={200}
            height={200}
            quality={100}
            src="/icon/arrow.png"
            alt=""
          />
        </div>
        <div className={style.close}>
          <button onClick={props.close}>X</button>
        </div>
        <div className={style.cardboardInfo}>
          <div className={style.cbimg}>
            <div className={style.cbimgset}>
              <Image
                width={200}
                height={200}
                quality={100}
                className={style.backimg}
                src="/img/cardbackold.png"
                alt=""
              />
              {props.img && (
                <Image
                  width={200}
                  height={200}
                  quality={100}
                  src={props.img}
                  className={style.frontimg}
                  alt=""
                />
              )}
            </div>
            <Link
              className={style.imglink}
              href={`/${page}/${props.id}`}
              target="_blank"
              rel="noopener"
            >
              CARD-IMG
            </Link>
          </div>
          <div className={style.cbicon}>
            <Image
              onClick={test}
              width={200}
              height={200}
              quality={100}
              className={style.img}
              src="/icon/iconLight.png"
              alt=""
            />
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
          <Image
            width={200}
            height={200}
            quality={100}
            src="/icon/arrow.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default CardInfo;
