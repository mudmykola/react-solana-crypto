import React from "react";
import serviceScss from "../services/service.scss";
import userManager from "../../assets/img/user-manager.png";
import mobileApp from "../../assets/img/mobile-app.png";
import portfolio from "../../assets/img/portfolio.png";

export default function Service() {
  const serviceData = [
    {
      image: userManager,
      title: "Solana Community",
      desc: "There's something for everybody. Follow along, chat on Discord, or read up on what we’re doing.",
    },
    {
      image: mobileApp,
      title: "Become a Validator",
      desc: "Help secure the network by running decentralized infrastructure. Learn about operating a validator node.",
    },
    {
      image: portfolio,
      title: "Fast, forever",
      desc: "Solana is all about speed, with 400 millisecond block times. And as hardware gets faster, so does the netwo.",
    },
  ];
  return (
    <div className="service flex j-center a-center">
      <div className="service-box flex column gap-1 max-container">
        <div className="service-title text-center">
          <h2>Getting Started with Solana Development </h2>
        </div>
        <div className="service-subtitle sub text-center">
          <h3>
            In this article you’ll learn about some of the very high level
            topics related to Solana.
          </h3>
        </div>
        <div className="service-inner flex j-center a-center gap">
          {serviceData.map(({ image, title, desc }) => {
            return (
              <div
                className="service-inner__box text-center flex column gap-1"
                key={title}
              >
                <div className="service-inner__image">
                  <img src={image} alt="service-icon" />
                </div>
                <h3 className="service-inner__title">{title}</h3>
                <p className="service-inner__desc">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
