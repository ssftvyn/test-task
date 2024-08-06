/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../style.css";
import picture from "../img/image.png";

function EmployeeProfile() {
  return (
    <>
      <div className="grid-container">
        <img src={picture} className="picture" />
        <div className="name">Дмитриев Игорь Степанович</div>
        <div className="position">Дизайнер</div>
        <div className="stack">
          <ul>
            <li>Figma</li>
            <li>Tilda</li>
            <li>Adobe illustrator</li>
          </ul>
        </div>
      </div>

      <div className="separator"></div>

      <div className="main-info">
        <h1>Основная информация</h1>
        <div className="info-grid">
          <div className="label">Контактный телефон:</div>
          <div className="contact">+7 (123) 456-7890</div>
          <div className="label">Дата рождения:</div>
          <div className="birthdate">01.01.1990</div>
          <div className="label">Дата устройства:</div>
          <div className="device-date">01.01.2020</div>
        </div>
      </div>
    </>
  );
}

export default EmployeeProfile;
