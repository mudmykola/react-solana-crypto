import React from "react";
import styled from "styled-components";
import Button from "../button/Button";

export default function NavBar() {
  const links = ["Home", "Dashbord", "Learn", "FAQ", "Contact", "About"];
  return (
    <Nav>
      <div className="brand">
        <h2>Solana</h2>
      </div>
      <div className="toggle"></div>
      <div className="links">
        <ul>
          {links.map((link) => {
            return (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="auth">
        <Button text="Sign In" subBtn />
        <Button text="Sign Up" subBtn />
      </div>
    </Nav>
  );
}

const Nav = styled.nav``;
