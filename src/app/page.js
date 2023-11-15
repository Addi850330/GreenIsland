"use client";
import React, { useState, useEffect } from "react";
import style from "./page.module.css";
export default function Home() {
  let [sec, setSec] = useState(0);

  const counter = function () {
    setSec(function (preCount) {
      return preCount + 1;
    });
  };

  useEffect(
    function () {
      // console.log("update");
      let secadd = window.setInterval(counter, 1000);
      return function () {
        window.clearInterval(secadd);
      };
    },
    [true]
  );
  if (sec === 3) {
    window.location.href = "/specifycard";
  }
  return (
    <div className={style.pageout}>
      <div className={style.loadpage}>
        <div className={style.loadimg}>
          <img className={style.imgfront} src="./img/cardback.png" alt="" />
          <img className={style.imgback} src="./img/cardback.png" alt="" />
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
      </div>
    </div>
  );
}
