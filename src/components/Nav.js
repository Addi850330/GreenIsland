"use client";
import React, { useState } from "react";
import Link from "next/link";
import style from "../app/page.module.css";
const Nav = (props) => {
  const [navhide, setNavhide] = useState("close");

  const navswitch = function () {
    if (navhide === "close") {
      setNavhide("open");
    } else {
      setNavhide("close");
    }
  };

  return (
    <>
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
        <div onClick={navswitch} className={style.contentclose}>
          <span
            className={
              navhide === "open"
                ? `${style.firstline} ${style.firstlinehide}`
                : `${style.firstline}`
            }
          ></span>
          <span
            className={
              navhide === "open"
                ? `${style.secondline} ${style.secondlinehide}`
                : `${style.secondline}`
            }
          ></span>
          <span
            className={
              navhide === "open"
                ? `${style.thirdline} ${style.thirdlinehide}`
                : `${style.thirdline}`
            }
          ></span>
        </div>
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

      <nav className={style.hidenav}>
        <ul
          className={
            navhide === "close"
              ? `${style.hidecontents} ${style.hidposition}`
              : `${style.hidecontents}`
          }
        >
          <li className={style.content}>
            <Link
              onClick={props.specify}
              className={
                props.page === "specifycard"
                  ? `${style.link} ${style.nharrow}`
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
                  ? `${style.link} ${style.nharrow}`
                  : `${style.link} `
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
                  ? `${style.link} ${style.nharrow}`
                  : `${style.link} `
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
                  ? `${style.link} ${style.nharrow}`
                  : `${style.link} `
              }
              href="/managercard"
              scroll={false}
            >
              管理者
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
