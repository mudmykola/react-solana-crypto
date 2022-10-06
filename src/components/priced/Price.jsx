import React from "react";
import priceCss from "../priced/price.scss";
import etn from "../../assets/img/etn.png";
import bnb from "../../assets/img/bnb.png";
import tron from "../../assets/img/tron.png";
import sol from "../../assets/img/sol.png";

export default function Price() {
  const data = [
    {
      name: "BSC",
      image: bnb,
      short: "BNB",
      price: "$6.56B",
      change: "-0.69%",
      marketCap: "$47.82B",
      parcent: "x2",
    },
    {
      name: "Ethereum",
      image: etn,
      short: "ETH",
      price: "$53.42B",
      change: "+8.97%",
      marketCap: "$168.21B",
      parcent: "x5",
    },
    {
      name: "Tron",
      image: tron,
      short: "TRON",
      price: "$5.55B",
      change: "+2.06%",
      marketCap: "$5.74B",
      parcent: "x3",
    },
    {
      name: "Solana",
      image: sol,
      short: "SOL",
      price: "$2.22B",
      change: "+8.97%",
      marketCap: "$12.17B",
      parcent: "x8",
    },
  ];
  const getPriceChangeClassName = (change) => {
    const changeNum = change[0];
    if (changeNum === "+") return " green";
    else if (changeNum === "-") return "red";
    else return;
  };
  return (
    <div className="flex gap-2 column price-section max-container">
      <div className="container ">
        <div className="  price-box  sub">
          <span>#</span>
          <span>Name</span>
          <span>Price</span>
          <span>Change</span>
          <span>Market Cap</span>
        </div>
        <div className="price-inner flex gap-1 column ">
          {data.map(
            (
              { name, image, short, price, change, marketCap, chart, parcent },
              index
            ) => {
              return (
                <div className="row a-center " key={price}>
                  <span>{index + 1}</span>
                  <div className="name flex a-center gap-1">
                    <span className="image">
                      <img src={image} alt={image} />
                    </span>
                    <span>{name}</span>
                    <span className="short sub">{short}</span>
                  </div>
                  <span>{price}</span>
                  <span className={getPriceChangeClassName(change)}>
                    {change}
                  </span>
                  <span>{marketCap}</span>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
