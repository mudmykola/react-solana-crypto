import React from "react";
import newsStories from "../newsstories/newstories.scss";
import { FiMail } from "react-icons/fi";
import Button from "../button/Button";

export default function Newstories() {
  return (
    <div className="newstories flex j-between a-center gap">
      <div className="newstories-box flex column gap-1 max-container">
        <h2>Newstories</h2>
        <h3>Get now free 20% discount for all products on your first order</h3>
      </div>
      <div className="newstories-inner flex j-center a-center gap-2">
        <div className="newstories-inner__input flex j-center a-center gap-1">
          <FiMail />
          <input type="text" placeholder="Enter your email address" />
        </div>
        <Button text="Subscribe" />
      </div>
    </div>
  );
}
