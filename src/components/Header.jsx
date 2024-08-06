import React from "react";
import "../style.css";

function Header() {
  return (
    <header>
      <div className="logo"></div>
      <div className="contact-info">
        <div className="contact-left">
          <p>+7 343 290 84 76</p>
        </div>
        <div className="contact-center">
          <p>info@66bit.ru</p>
        </div>
        <label id="switch" className="switch">
          <input type="checkbox" onchange="toggleTheme()" id="slider" />
          <span className="slider round"></span>
        </label>
      </div>
    </header>
  );
}

export default Header;
