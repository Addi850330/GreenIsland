"use client";
import React, { Children, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Link from "next/link";
import style from "../page.module.css";
import { data } from "../data";
const page = () => {
  const [cards, setCards] = useState(data[0].specifycard);
  const cardInfo = function (e) {
    console.log(e.target);
  };
  return (
    <>
      <Sidebar />
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
                <img src={card.img} alt={card.name} />
              </button>
            </div>
            <p className={style.cardtitle}>
              {card.number} {card.name}
            </p>
            <div className={style.cardbgc}>
              <img src="./img/cardset.png" alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
