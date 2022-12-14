import React from "react";
import Ecosystem from "./components/ecosystem/Ecosystem";
import { Footer } from "./components/footer/Footer";
import Home from "./components/homed/Home";
import NavBar from "./components/navbar/NavBar";
import Newstories from "./components/newsstories/Newstories";
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
      <Newstories />
      <Footer />
    </>
  );
}
