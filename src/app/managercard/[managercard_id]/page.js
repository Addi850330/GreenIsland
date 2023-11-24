"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { data } from "../../data";
import style from "../../page.module.css";

const Post = ({ params }) => {
  const managercard_id = params.managercard_id;

  const [cardname, setCardname] = useState("");
  const [cardrank, setCardrank] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [carddescription, setCarddescription] = useState("");
  const [cardimg, setCardimg] = useState("");
  const [cardimgorigin, setCardimgorigin] = useState("");

  const cardid = managercard_id;
  const datas = data[2].managercard;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    datas.forEach((obj) => {
      if (obj.id == cardid) {
        setCardname(obj.name);
        setCardrank(obj.rank);
        setCardnumber(obj.number);
        setCarddescription(obj.description);
        setCardimg(obj.img);
        setCardimgorigin(obj.imgorigin);
      }
    });
  }, []);

  return (
    <>
      <div className={style.mcard}>
        <div className={style.mcardimg}>
          <img src={`.${cardimg}`} alt={cardname} />
        </div>
        <div className={style.mcardinfo}>
          <div className={style.mcardnum}>Number : {cardnumber}</div>
          <div className={style.mcardrank}>Rank : {cardrank}</div>
          <div className={style.mcardname}>Name : {cardname}</div>
          <div className={style.mcarddes}>
            Information :
            <br />
            {carddescription}
          </div>
          <div className={style.downloadcard}>
            <Link href={`.${cardimgorigin}`} className={style.mcardlink}>
              Dowload
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
