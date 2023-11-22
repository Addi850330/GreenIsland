"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "../../components/Sidebarfreeslot";
import CardInfo from "../../components/CardInfo";
import { data } from "../data";
import style from "../page.module.css";

const page = () => {
  const datas = data[3].freeslot;
  const [cards, setCards] = useState(datas);

  const [rank, setRank] = useState("all");
  const rankAll = function () {
    setCards(datas);
    setRank("all");
  };
  const rankB = function () {
    const filterB = datas.filter(function (rank) {
      return rank.rank === "B";
    });
    setRank("B");
    setCards(filterB);
  };
  const rankC = function () {
    const filterC = datas.filter(function (rank) {
      return rank.rank === "C";
    });
    setRank("C");
    setCards(filterC);
  };
  const rankD = function () {
    const filterD = datas.filter(function (rank) {
      return rank.rank === "D";
    });
    setRank("D");
    setCards(filterD);
  };
  const rankE = function () {
    const filterE = datas.filter(function (rank) {
      return rank.rank === "E";
    });
    setRank("E");
    setCards(filterE);
  };
  const rankF = function () {
    const filterF = datas.filter(function (rank) {
      return rank.rank === "F";
    });
    setRank("F");
    setCards(filterF);
  };
  const rankG = function () {
    const filterG = datas.filter(function (rank) {
      return rank.rank === "G";
    });
    setRank("G");
    setCards(filterG);
  };
  const rankH = function () {
    const filterH = datas.filter(function (rank) {
      return rank.rank === "H";
    });
    setRank("H");
    setCards(filterH);
  };
  const rankSS = function () {
    const filterSS = datas.filter(function (rank) {
      return rank.rank === "SS";
    });
    setRank("SS");
    setCards(filterSS);
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

  const [windowSwitch, setWindowSwitch] = useState("close");

  const cardInfo = function (e) {
    const cardid = e.target.name;
    // console.log(cardid);
    datas.forEach((obj) => {
      if (obj.id == cardid) {
        setCardname(obj.name);
        setCardrank(obj.rank);
        setCardnumber(obj.number);
        setCarddescription(obj.description);
        setCardimg(obj.img);
        setCardimgorigin(obj.imgorigin);
        // console.log(obj);
      }
    });
    setWindowSwitch("open");
  };

  const close = function () {
    setWindowSwitch("close");
  };
  return (
    <>
      <Sidebar
        rankAll={rankAll}
        rankB={rankB}
        rankC={rankC}
        rankD={rankD}
        rankE={rankE}
        rankF={rankF}
        rankG={rankG}
        rankH={rankH}
        rankSS={rankSS}
        test={ranktest}
        rank={rank}
      ></Sidebar>
      <CardInfo
        close={close}
        windowSwitch={windowSwitch}
        name={cardname}
        rank={cardrank}
        number={cardnumber}
        description={carddescription}
        img={cardimg}
        imgorigin={cardimgorigin}
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
                href={`/freeslot/${card.id}`}
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
