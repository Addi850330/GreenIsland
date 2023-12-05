import React from "react";
import Image from "next/image";
import style from "../page.module.css";
const NotFound = () => {
  return (
    <>
      <div className={style.notfound}>
        <Image
          width={190}
          height={200}
          className={style.leftimg}
          src="/img/errorpage/Killua.png"
          alt=""
        />
        <Image
          width={190}
          height={200}
          className={style.rightimg}
          src="/img/errorpage/gon.png"
          alt=""
        />
        <div className={style.nfinfo}>
          <Image
            width={190}
            height={200}
            className={style.nfimg}
            src="/img/errorpage/404.png"
            alt=""
          />
          <div className={style.nftext}>
            <div className={style.nftile}>404 Not Found</div>
            <div className={style.nfinnertext}>
              Sorry~ The page is not found.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NotFound;
