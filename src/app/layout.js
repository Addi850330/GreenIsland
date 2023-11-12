"use client";
import { React, useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function RootLayout({ children }) {
  const [page, setPage] = useState("specifycard");

  const specifypage = function () {
    setPage("specifycard");
  };
  const magicpage = function () {
    setPage("magiccard");
  };
  const managerpage = function () {
    setPage("managercard");
  };
  const freeslotpage = function () {
    setPage("freeslot");
  };
  const testpage = function () {
    console.log(page);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <html lang="en">
      <body>
        <Nav
          testpage={testpage}
          specify={specifypage}
          magic={magicpage}
          manager={managerpage}
          freeslot={freeslotpage}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
