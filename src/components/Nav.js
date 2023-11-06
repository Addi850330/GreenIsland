"use client";
import React from "react";
import Link from "next/link";
import style from "../app/page.module.css";
const Nav = () => {
  
  return (
    <nav className={style.nav}>
      <div className={style.icon}>
        <div className={style.iconimg}>
          <img src="/icon/iconLight.png" alt="" />
        </div>
        <div className={style.text}>
          <div>Hunter × Hunter</div>
          <div>Greed Island</div>
        </div>
      </div>
      <div className={style.title}>Card Collection</div>
      <div className={style.table}>
        <ul className={style.contents}>
          <li className={style.content}>
            <Link className={style.link} href="/specifycard">
              指定口袋
            </Link>
          </li>
          <li className={style.content}>
            <Link className={style.link} href="/magiccard">
              咒語卡
            </Link>
          </li>
          <li className={style.content}>
            <Link className={style.link} href="/managercard">
              管理者
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
