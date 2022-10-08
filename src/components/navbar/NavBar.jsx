import React from "react";
import styled from "styled-components";
import navbar from "../navbar/navbar.scss";
import Button from "../button/Button";

export default function NavBar() {
  const links = [
    "Home",
    "Network",
    "Validators",
    "FAQ",
    "Contact",
    "Ecosystem",
  ];
  return (
    <Nav className="flex j-between a-center">
      <div className="brand">
        <h2>Solana</h2>
      </div>
      <div className="toggle"></div>
      <div className="links">
        <ul className="flex gap-2">
          {links.map((link) => {
            return (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="auth flex gap-1">
        <Button text="Sign In" subBtn />
        <Button text="Sign Up" subBtn />
      </div>
    </Nav>
  );
}

const Nav = styled.nav``;
