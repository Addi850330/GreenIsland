"use client";
import React, { useState } from "react";
import Sidebar from "../../components/Sidebarmagic";
import { data } from "../data";
import style from "../page.module.css";
const page = () => {
  const datas = data[1].magiccard;
  const [cards, setCards] = useState(datas);
  const cardInfo = function (e) {
    const cardid = e.target.name;
    console.log(cards[cardid]);
  };
  return (
    <>
      <Sidebar></Sidebar>

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
