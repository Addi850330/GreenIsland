"use client";
import { createContext, useContext, useState, useEffect } from "react";

export const GlobalContextProvider = ({ children }) => {
  const [gloPath, setGloPath] = useState("");
  const GlobalContext = createContext({ gloPath, setGloPath });
  return (
    <GlobalContext.Provider value={(gloPath, setGloPath)}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useGlobalContext(GlobalContext);
