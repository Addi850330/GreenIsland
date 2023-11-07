"use client";
import { React, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
