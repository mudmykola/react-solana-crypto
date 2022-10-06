import React from "react";
import homeCss from "./home.css";
import { FaChevronCircleRight } from "react-icons/fa";
import { BiMeteor } from "react-icons/bi";
import Button from "../button/Button";
import headerImg from "../../assets/img/header-img.webp";

export default function Home() {
  return (
    <section className=" flex j-center a-center gap">
      <div className="content flex column gap-2">
        <div className="subtitle">
          <h3 className="flex a-center gap-1 color-b">
            <span>
              <BiMeteor />
            </span>
            Scalefor global adoption
          </h3>
        </div>
        <div className="title">
          <h1>Powerful for developers. Fast for everyone. </h1>{" "}
        </div>
        <div className="description">
          <p className="sub">
            Solana is a decentralized blockchain built to enable scalable,
            user-friendly apps for the world.
          </p>
        </div>
        <div className="buttons flex gap-1">
          <Button text="Start Building" icon={<FaChevronCircleRight />} />
          <Button text="Read Documentation" subButton />
        </div>
      </div>
      <div className="image">
        <img className="h-width" src={headerImg} alt="header-img" />
      </div>
    </section>
  );
}
