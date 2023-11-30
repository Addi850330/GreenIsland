"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebarluler";
import CardInfo from "../../components/CardInfo";
import { data } from "../data";
import style from "../page.module.css";
const page = () => {
  const datas = data[2].managercard;
  const [cards, setCards] = useState(datas);
  const [rank, setRank] = useState("all");

  const rankAll = function () {
    setCards(datas);
    setRank("all");
  };
  const ranktest = function () {
    console.log(rank);
  };

  // scroll set -----------------------------------

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // pop-up window-------------------------------------

  const [cardname, setCardname] = useState("");
  const [cardrank, setCardrank] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [carddescription, setCarddescription] = useState("");
  const [cardimg, setCardimg] = useState("");
  const [cardimgorigin, setCardimgorigin] = useState("");
  const [cardId, setCardId] = useState("");

  const [windowSwitch, setWindowSwitch] = useState("close");
  const [cardIndex, setCardindex] = useState("");

  const [nextArrow, setNextArrow] = useState("show");
  const [previousArrow, setPreviousArrow] = useState("show");

  const cardInfo = function (e) {
    const cardid = e.target.name;

    datas.forEach((obj, index) => {
      if (obj.id == cardid) {
        setCardname(obj.name);
        setCardrank(obj.rank);
        setCardnumber(obj.number);
        setCarddescription(obj.description);
        setCardimg(obj.img);
        setCardimgorigin(obj.imgorigin);
        setCardId(obj.id);
        setCardindex(index);
      }
    });
    setWindowSwitch("open");
  };

  const close = function () {
    setWindowSwitch("close");
  };

  const cardnext = function () {
    const nextobj = cardIndex + 1;
    let obj = datas[nextobj];
    setCardname(obj.name);
    setCardrank(obj.rank);
    setCardnumber(obj.number);
    setCarddescription(obj.description);
    setCardimg(obj.img);
    setCardimgorigin(obj.imgorigin);
    setCardId(obj.id);
    setCardindex(nextobj);
  };

  const cardprevious = function () {
    const previousobj = cardIndex - 1;
    let obj = datas[previousobj];
    setCardname(obj.name);
    setCardrank(obj.rank);
    setCardnumber(obj.number);
    setCarddescription(obj.description);
    setCardimg(obj.img);
    setCardimgorigin(obj.imgorigin);
    setCardId(obj.id);
    setCardindex(previousobj);
  };

  useEffect(() => {
    if (cardIndex == datas.length - 1) {
      setNextArrow("hide");
    } else {
      setNextArrow("show");
    }
    if (cardIndex == 0) {
      setPreviousArrow("hide");
    } else {
      setPreviousArrow("show");
    }
  }, [cardIndex]);
  return (
    <>
      <Sidebar rankAll={rankAll} test={ranktest} rank={rank}></Sidebar>
      <CardInfo
        close={close}
        cardnext={cardnext}
        cardprevious={cardprevious}
        windowSwitch={windowSwitch}
        name={cardname}
        rank={cardrank}
        number={cardnumber}
        description={carddescription}
        img={cardimg}
        imgorigin={cardimgorigin}
        id={cardId}
        nextArrow={nextArrow}
        previousArrow={previousArrow}
      />
      <div className={style.card}>
        {cards.map((card, index) => (
          <div
            onClick={cardInfo}
            data-aos="fade-up"
            className={style.cardset}
            key={index}
          >
            <div className={style.cardinfo}>
              <button>
                <img name={card.id} src={card.img} alt={card.name} />
              </button>
              <Link
                href={`/managercard/${card.id}`}
                className={style.mobilepage}
                target="_blank"
              >
                <img name={card.id} src={card.img} alt={card.name} />
              </Link>
            </div>
            <p className={style.cardtitle}>
              {card.number} {card.name}
            </p>
            <div className={style.cardbgc}>
              <img src="./img/cardset.png" alt="bgc" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
