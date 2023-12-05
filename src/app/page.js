"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import style from "./page.module.css";

export default function Home() {
  let [sec, setSec] = useState(0);

  const counter = function () {
    setSec(function (preCount) {
      return preCount + 1;
    });
  };
  // useEffect(
  //   function () {
  //     // console.log("update");
  //     let secadd = window.setInterval(counter, 1000);
  //     return function () {
  //       window.clearInterval(secadd);
  //     };
  //   },
  //   [true]
  // );
  // if (sec === 3) {
  //   window.location.href = "/specifycard";
  // }

  return (
    <>
      <div className={style.pageout}>
        <div className={style.loadpage}>
          <div className={style.loadimg}>
            <Image
              width={550}
              height={605}
              className={style.imgfront}
              src="/img/cardback.png"
              alt=""
            />
            <Image
              width={550}
              height={605}
              className={style.imgback}
              src="/img/cardback.png"
              alt=""
            />
          </div>
          <div className={style.loadtext}>
            <p>L</p>
            <p>o</p>
            <p>a</p>
            <p>d</p>
            <p>i</p>
            <p>n</p>
            <p>g</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
          </div>
          <div data-aos="fade-left" className={style.loadanimel}>
            <Image
              width={550}
              height={605}
              src="/img/homepage/killa.png"
              alt="killa"
            />
          </div>
          <div data-aos="fade-down-right" className={style.loadanimelb}>
            <Image
              width={550}
              height={605}
              src="/img/homepage/killab.png"
              alt=""
            />
          </div>
          <div data-aos="flip-up" className={style.loadanimem}>
            <Image
              width={550}
              height={605}
              src="/img/homepage/hero.png"
              alt=""
            />
          </div>
          <div data-aos="fade-right" className={style.loadanimer}>
            <Image
              width={550}
              height={605}
              src="/img/homepage/gon.png"
              alt=""
            />
          </div>
          <div data-aos="fade-up-left" className={style.loadanimerb}>
            <Image
              width={550}
              height={605}
              src="/img/homepage/gonb.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
