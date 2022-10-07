import React from "react";
import styled from "styled-components";
import signUp from "../signup/signup.scss";
import signupBg from "../../assets/img/sidnup-bg.jpg";
import creditCard from "../../assets/img/credit-card.png";

export default function Signup() {
  return (
    <Div className="signup flex gap j-between a-center ">
      <div className="signup-box text-center max-container">
        <h2>Sign up without any bank account linking and card</h2>
      </div>
      <div className="signup-image">
        <img src={creditCard} alt="credit-card" />
      </div>
    </Div>
  );
}

const Div = styled.div`
  background-image: url(${signupBg});
`;
