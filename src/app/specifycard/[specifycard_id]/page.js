"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { data } from "../../data";
import style from "../../page.module.css";
import { notFound } from "next/navigation";

const Post = ({ params }) => {
  const specifycard_id = params.specifycard_id;
  const [nextbtn, setNextbtn] = useState("show");
  const [previousbtn, setPreviosbtn] = useState("show");

  const [cardname, setCardname] = useState("");
  const [cardrank, setCardrank] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [carddescription, setCarddescription] = useState("");
  const [cardimg, setCardimg] = useState("");
  const [cardimgorigin, setCardimgorigin] = useState("");
  const [cardIndex, setCardIndex] = useState("");

  const cardid = specifycard_id;
  const datas = data[0].specifycard;

  const found = datas.find((obj) => obj.id == cardid);

  useEffect(() => {
    if (found == undefined) {
      notFound();
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    datas.forEach((obj, index) => {
      if (obj.id == cardid) {
        setCardname(obj.name);
        setCardrank(obj.rank);
        setCardnumber(obj.number);
        setCarddescription(obj.description);
        setCardimg(obj.img);
        setCardimgorigin(obj.imgorigin);
        setCardIndex(index);
        if (index == datas.length - 1) {
          setNextbtn("close");
        } else if (index == 0) {
          setPreviosbtn("close");
        } else {
          setNextbtn("show");
          setPreviosbtn("show");
        }
      }
    });
  }, []);

  const nextpage = function () {
    const newcardindex = cardIndex + 1;
    const newcardset = datas[newcardindex].id;
    console.log(newcardindex, newcardset);
    window.location.href = `/specifycard/${newcardset}`;
  };
  const previouspage = function () {
    const newcardindex = cardIndex - 1;
    const newcardset = datas[newcardindex].id;
    console.log(newcardindex, newcardset);
    window.location.href = `/specifycard/${newcardset}`;
  };
  return (
    <>
      <div className={style.mcard}>
        <div className={style.mcardimg}>
          {cardimg && (
            <Image
              width={300}
              height={450}
              priority
              src={`${cardimg}`}
              alt={cardname}
              style={{ width: "100", height: "100" }}
            />
          )}
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
            <Link
              href={`.${cardimgorigin}`}
              download={cardname}
              target="_blank"
              className={style.mcardlink}
              rel="noopener noreferrer"
            >
              Dowload
            </Link>
          </div>
        </div>
        <div className={style.mobileBtn}>
          <button
            className={
              previousbtn === "show"
                ? `${style.mobilePreviousBtn}`
                : `${style.mobilePreviousBtn} ${style.mobilePreviousBtnHide}`
            }
            onClick={previouspage}
          >
            Prev
          </button>
          <button
            className={
              nextbtn === "show"
                ? `${style.mobileNextBtn}`
                : `${style.mobileNextBtn} ${style.mobileNextBtnHide}`
            }
            onClick={nextpage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Post;
