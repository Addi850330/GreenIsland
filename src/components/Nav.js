"use client";
import React from "react";
import Link from "next/link";
import style from "../app/page.module.css";
const Nav = (props) => {
  return (
    <nav className={style.nav}>
      <div className={style.icon}>
        <div className={style.iconimg}>
          <img onClick={props.testpage} src="/icon/iconLight.png" alt="" />
        </div>
        <div className={style.text}>
          <div>Hunter × Hunter</div>
          <div>Greed Island</div>
        </div>
      </div>
      <div className={style.title}>Card Collection</div>
      <div className={style.table}>
        <ul className={style.contents}>
          <li className={`${style.content} `}>
            <Link
              onClick={props.specify}
              className={
                props.page === "specifycard"
                  ? `${style.link} ${style.contentarrow}`
                  : `${style.link}`
              }
              href="/specifycard"
              scroll={false}
            >
              指定口袋
            </Link>
          </li>
          <li className={style.content}>
            <Link
              onClick={props.magic}
              className={
                props.page === "magiccard"
                  ? `${style.link} ${style.contentarrow}`
                  : `${style.link}`
              }
              href="/magiccard"
              scroll={false}
            >
              咒語卡
            </Link>
          </li>
          <li className={style.content}>
            <Link
              onClick={props.freeslot}
              className={
                props.page === "freeslot"
                  ? `${style.link} ${style.contentarrow}`
                  : `${style.link}`
              }
              href="/freeslot"
              scroll={false}
            >
              自由口袋
            </Link>
          </li>
          <li className={style.content}>
            <Link
              onClick={props.manager}
              className={
                props.page === "managercard"
                  ? `${style.link} ${style.contentarrow}`
                  : `${style.link}`
              }
              href="/managercard"
              scroll={false}
            >
              管理者
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
