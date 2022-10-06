import React from "react";
import ecosystemCss from "../ecosystem/ecosystem.scss";
import { FaChevronCircleRight } from "react-icons/fa";
import ecosystemImg from "../../assets/img/ecosystem-img.webp";
import Button from "../button/Button";

export default function Ecosystem() {
  return (
    <div className="ecosys flex a-center gap">
      <div className="ecosys-box flex column gap max-container">
        <div className="ecosys-box__title  flex column j-center">
          <div className="ecosys-box__subtitle  sub">
            <h3>Ecosystem</h3>
          </div>
          <div className="ecosys-title">
            <h2>Discover the hottest projects on Solana.</h2>
          </div>
        </div>
        <div className="flex gap a-center j-center">
          <div className="ecosys-info flex column gap a-start j-center">
            <p className="sub">Protocol Based Rewards</p>
            <p className="sub">
              Issuances from a global, protocol-defined, inflation rate. These
              rewards are delivered on top of earnings from transaction fees.
            </p>
            <Button text="Start Investing" icon={<FaChevronCircleRight />} />
          </div>
          <div className="ecosys-image">
            <img className="h-width" src={ecosystemImg} alt="ecosystem-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
