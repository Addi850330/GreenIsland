"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebarmagic";
import { data } from "../data";
import style from "../page.module.css";
const page = () => {
  const datas = data[1].magiccard;
  const [cards, setCards] = useState(datas);

  const cardInfo = function (e) {
    const cardid = e.target.name;
    console.log(cardid);

    function findcard(id) {
      return (id.id = cardid);
    }
    console.log(datas.find(findcard));
  };

  const [rank, setRank] = useState("all");
  const rankAll = function () {
    setCards(datas);
    setRank("all");
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
  const rankS = function () {
    const filterS = datas.filter(function (rank) {
      return rank.rank === "S";
    });
    setRank("S");
    setCards(filterS);
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

  const toNumber1001 = function () {
    rankAll();
    let time = null;
    function check() {
      let dom = document.getElementById("1001");
      if (dom) {
        const number1001 = document.getElementById("1001");
        const element1001 = number1001.getBoundingClientRect().top;
        // console.log(element1001);
        const navoffset = 95;
        let offsetPosition = element1001 - navoffset;
        window.scrollBy({
          top: offsetPosition,
          behavior: "smooth",
        });
        if (!time) {
          clearTimeout(time);
        }
      } else {
        // console.log("loading");
        time = setTimeout(check, 500);
      }
    }
    check();
  };
  const toNumber1021 = function () {
    rankAll();
    let time = null;
    function check() {
      let dom = document.getElementById("1021");
      if (dom) {
        const number1021 = document.getElementById("1021");
        const element1021 = number1021.getBoundingClientRect().top;
        // console.log(element1021);
        const navoffset = 100;
        let offsetPosition = element1021 - navoffset;
        window.scrollBy({
          top: offsetPosition,
          behavior: "smooth",
        });
        if (!time) {
          clearTimeout(time);
        }
      } else {
        // console.log("loading");
        time = setTimeout(check, 500);
      }
    }
    check();
  };
  const toNumber1040 = function () {
    rankAll();
    let time = null;
    function check() {
      let dom = document.getElementById("1040");
      if (dom) {
        const number1040 = document.getElementById("1040");
        const element1040 = number1040.getBoundingClientRect().top;
        // console.log(element1040);
        const navoffset = 40;
        let offsetPosition = element1040 - navoffset;
        window.scrollBy({
          top: offsetPosition,
          behavior: "smooth",
        });
        if (!time) {
          clearTimeout(time);
        }
      } else {
        // console.log("loading");
        time = setTimeout(check, 500);
      }
    }
    check();
  };
  return (
    <>
      <Sidebar
        toNumber1001={toNumber1001}
        toNumber1021={toNumber1021}
        toNumber1040={toNumber1040}
        rankAll={rankAll}
        rankA={rankA}
        rankB={rankB}
        rankC={rankC}
        rankD={rankD}
        rankE={rankE}
        rankF={rankF}
        rankG={rankG}
        rankS={rankS}
        test={ranktest}
      ></Sidebar>

      <div className={style.card}>
        {cards.map((card, index) => (
          <div
            onClick={cardInfo}
            data-aos="fade-up"
            className={style.cardset}
            key={index}
          >
            <div id={card.number} className={style.cardinfo}>
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
