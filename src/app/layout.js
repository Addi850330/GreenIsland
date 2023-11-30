"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Nav from "../components/Nav";
import TopButton from "../components/TopButton";
import Footer from "../components/Footer";

import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function RootLayout({ children }) {
  const [page, setPage] = useState("");

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/specifycard") {
      setPage("specifycard");
    }
    if (pathname === "/magiccard") {
      setPage("magiccard");
    }
    if (pathname === "/managercard") {
      setPage("managercard");
    }
    if (pathname === "freeslot") {
      setPage("freeslot");
    }
  }, []);

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
          page={page}
          testpage={testpage}
          specify={specifypage}
          magic={magicpage}
          manager={managerpage}
          freeslot={freeslotpage}
        />
        {children}
        <TopButton page={page} />
        <Footer />
      </body>
    </html>
  );
}
