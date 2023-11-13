"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Link from "next/link";
import { data } from "../data";
import style from "../page.module.css";

const page = () => {
  const datas = data[0].specifycard;
  const [cards, setCards] = useState(datas);

  const cardInfo = function (e) {
    const cardid = e.target.name;
    console.log(cards[cardid]);
  };

  const [rank, setRank] = useState("all");
  const rankAll = function () {
    setCards(datas);
    setRank("all");
    backToTopHandle();
  };
  const rankA = function () {
    const filterA = datas.filter(function (rank) {
      return rank.rank === "A";
    });
    setRank("A");
    setCards(filterA);
  };
  const rankB = function () {
    const filterB = datas.filter(function (rank) {
      return rank.rank === "B";
    });
    setRank("B");
    setCards(filterB);
  };
  const rankD = function () {
    const filterD = datas.filter(function (rank) {
      return rank.rank === "D";
    });
    setRank("D");
    setCards(filterD);
  };
  const rankS = function () {
    const filterS = datas.filter(function (rank) {
      return rank.rank === "S";
    });
    setRank("S");
    setCards(filterS);
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

  const toNumber000 = function () {
    const number000 = document.getElementById("000");
    const element000 = number000.getBoundingClientRect().top;
    const navoffset = 30;

    let offsetPosition = element000 - navoffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    console.log(top);
    console.log(element000);
    console.log(offsetPosition);
  };

  return (
    <>
      <Sidebar
        toNumber000={toNumber000}
        // toNumber032={toNumber032}
        // toNumber064={toNumber064}
        rankAll={rankAll}
        rankA={rankA}
        rankB={rankB}
        rankD={rankD}
        rankS={rankS}
        rankSS={rankSS}
        test={ranktest}
      />
      <div className={style.card}>
        {cards.map((card, index) => (
          <div
            id={card.number}
            onClick={cardInfo}
            data-aos="fade-up"
            className={style.cardset}
            key={index}
          >
            <div className={style.cardinfo}>
              <button>
                <img name={card.id} src={card.img} alt={card.name} />
              </button>
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
