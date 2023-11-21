"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "../../components/Sidebar";
import CardInfo from "../../components/CardInfo";
import { data } from "../data";
import style from "../page.module.css";

const page = () => {
  const datas = data[0].specifycard;
  const [cards, setCards] = useState(datas);
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
    rankAll();
    let time = null;
    function check() {
      let dom = document.getElementById("000");
      if (dom) {
        const number000 = document.getElementById("000");
        const element000 = number000.getBoundingClientRect().top;
        // console.log(element000);
        const navoffset = 45;
        let offsetPosition = element000 - navoffset;
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

  const toNumber032 = function () {
    rankAll();
    let time = null;
    function check() {
      let dom = document.getElementById("031");
      if (dom) {
        const number032 = document.getElementById("031");
        const element032 = number032.getBoundingClientRect().top;
        // console.log(element032);
        const navoffset = 40;
        let offsetPosition = element032 - navoffset;
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

  const toNumber064 = function () {
    rankAll();
    let time = null;
    function check() {
      let dom = document.getElementById("063");
      if (dom) {
        const number064 = document.getElementById("063");
        const element064 = number064.getBoundingClientRect().top;
        // console.log(element064);
        const navoffset = 40;
        let offsetPosition = element064 - navoffset;
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
        toNumber000={toNumber000}
        toNumber032={toNumber032}
        toNumber064={toNumber064}
        rankAll={rankAll}
        rankA={rankA}
        rankB={rankB}
        rankD={rankD}
        rankS={rankS}
        rankSS={rankSS}
        rank={rank}
        test={ranktest}
      />
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
            <div id={card.number} className={style.cardinfo}>
              <button>
                <img name={card.id} src={card.img} alt={card.name} />
              </button>
              <Link href="/specifycard/001" className={style.mobilepage}>
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
