import React, { useState, useRef, useCallback, useEffect } from "react";
import style from "../app/page.module.css";
const TopButton = (props) => {
  const [scroll, setScroll] = useState("none");
  //
  const [myScrollTop, setMyScrollTop] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setMyScrollTop(window.scrollY);
    });

    if (myScrollTop > 250) {
      setScroll("show");
    } else {
      setScroll("none");
    }
    // console.log(scroll);
  }, [myScrollTop]);

  //
  const toTop = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={
        props.page === "" || scroll === "none"
          ? `${style.topButton} ${style.topButtonnone}`
          : `${style.topButton} `
      }
      onClick={toTop}
    >
      <div className={style.topTitle}>TOP</div>
      <div className={style.topAnime}>
        <img className={style.topimg} src="./icon/arrow.png" alt="" />
      </div>
    </div>
  );
};

export default TopButton;
