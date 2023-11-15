"use client";
import React, { useState, useEffect } from "react";
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
      <Sidebar rankAll={rankAll} test={ranktest} rank={rank}></Sidebar>
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
