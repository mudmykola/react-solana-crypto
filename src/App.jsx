import React from "react";
import Home from "./components/homed/Home";
import NavBar from "./components/navbar/NavBar";
import Price from "./components/priced/Price";

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Price />
    </>
  );
}
