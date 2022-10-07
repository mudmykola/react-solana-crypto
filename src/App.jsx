import React from "react";
import Ecosystem from "./components/ecosystem/Ecosystem";
import Home from "./components/homed/Home";
import NavBar from "./components/navbar/NavBar";
import Price from "./components/priced/Price";
import Roadmap from "./components/roadmap/Roadmap";
import Service from "./components/services/Service";
import Signup from "./components/signup/Signup";

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Price />
      <Ecosystem />
      <Service />
      <Signup />
      <Roadmap />
    </>
  );
}
