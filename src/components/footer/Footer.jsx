import React from "react";
import footerScss from "../footer/footer.scss";
import {
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";

export const Footer = () => {
  const menuLinks = [
    "About",
    "Careers",
    "News",
    "Security",
    "Contacts",
    "Capital",
    "Climate",
    "Partners",
    "NFT",
  ];
  const learnLinks = [
    "What's TrendingWhat's Trending",
    "Product News",
    "Events",
    "University",
    "NFT Deep Dives",
  ];
  const blockchain = ["Crypto.org Chain", "Chain Explorer"];
  const socialIcons = [
    <AiFillYoutube />,
    <AiFillTwitterCircle />,
    <AiFillInstagram />,
  ];
  return (
    <div className="footer flex column gap">
      <div className="footer-box max-container">
        <div className="footer-box__inner flex column gap-1">
          <div className="footer-box__logo">
            <h2>Solana</h2>
          </div>
          <div className="footer-box__address">
            <p>Koln, 58 Ert 30th Street, 2th Lomn, Canadam, CD 20365</p>
          </div>
          <div className="footer-box__contact">
            <a href="tel:+2302550698">+2-302-55-0698</a>
            <a href="mail:hello@solana.com">hello@solana.com</a>
          </div>
          <div className="footer-box__social flex gap-2">
            {socialIcons.map((icon, index) => {
              return (
                <div className="footer-box__icon" key={index}>
                  {icon}
                </div>
              );
            })}
          </div>
        </div>
        <div className="footer-menu flex column gap-1">
          <div className="footer-menu__title">
            <h3>Company</h3>
          </div>
          <ul className="footer-menu__list flex column gap-half">
            {menuLinks.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>
        <div className="footer-learn flex column gap-1">
          <div className="footer-learn__title">
            <h3>Learn</h3>
          </div>
          <ul className="footer-learn__list flex column gap-half">
            {learnLinks.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>
        <div className="footer-blockchain flex column gap-1">
          <div className="footer-blockchain__title">
            <h3>Blockchain</h3>
          </div>
          <ul className="footer-blockchain__list flex column gap-half">
            {blockchain.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>
        <div className="footer-learn flex column gap-1">
          <div className="footer-learn__title">
            <h3>Learn</h3>
          </div>
          <ul className="footer-learn__list flex column gap-half">
            {learnLinks.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
