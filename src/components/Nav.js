"use client";
import React, { useState } from "react";
import Link from "next/link";
import style from "../app/page.module.css";
const Nav = () => {
  const [linkarrow, setLinkarrow] = useState("specifycard");

  const specify = function () {
    setLinkarrow("specifycard");
  };
  const magic = function () {
    setLinkarrow("magiccard");
  };
  const manager = function () {
    setLinkarrow("managercard");
  };

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
            <Link className={style.link} href="/specifycard" scroll={false}>
              指定口袋
            </Link>
          </li>
          <li className={style.content}>
            <Link className={style.link} href="/magiccard" scroll={false}>
              咒語卡
            </Link>
          </li>
          <li className={style.content}>
            <Link className={style.link} href="/managercard" scroll={false}>
              管理者
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
