import React from "react";
import button from "../button/button.scss";

function Button({ text, icon = false, subButton = false }) {
  return (
    <div className="flex j-center a-center">
      {icon ? (
        <button
          className={`flex a-center j-center gap-1 ${
            subButton ? "subBtn" : ""
          }`}
        >
          {text}
          {icon}
        </button>
      ) : (
        <button className={`${subButton ? "subBtn" : ""}`}>{text}</button>
      )}
    </div>
  );
}

export default Button;
