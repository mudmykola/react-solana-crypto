import React from "react";
import Ecosystem from "./components/ecosystem/Ecosystem";
import Home from "./components/homed/Home";
import NavBar from "./components/navbar/NavBar";
import Price from "./components/priced/Price";
import Service from "./components/services/Service";

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Price />
      <Ecosystem />
      <Service />
    </>
  );
}
