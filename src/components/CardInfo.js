"use client";
import React from "react";
import style from "../app/page.module.css";
import Link from "next/link";
const CardInfo = () => {
  return (
    <div className={style.cardboard}>
      <div className={style.close}>
        <button>X</button>
      </div>
      <div className={style.cardboardInfo}>
        <div className={style.cbimg}>
          <div className={style.cbimgset}>
            <img className={style.backimg} src="./img/cardback.png" alt="" />
            <img
              className={style.frontimg}
              src="./img/freeslot/origin/101.png"
              alt=""
            />
          </div>
          <Link className={style.imglink} href="">Download</Link>
        </div>
        <div className={style.cbicon}>
          <img className={style.img} src="./icon/iconLight.png" alt="" />
        </div>
        <div className={style.cbtext}>
          <div>瘋狂博士的費洛蒙劑</div>
          <div>Rank:NaN</div>
          <div>Number:-001</div>
          <div>
            Information:
            <p>
              巨人族中身材最巨大的種族。喜歡集體行動，會攻擊侵入地盤的生物。智能低，弱點為眼睛，一旦被打到，就變得出乎意料的脆弱。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
