import React from "react";
import "../style.css";
import vectorSvg from "../img/vector.svg";

function Filters() {
  const handleDropdownClick = (event) => {
    const dropdownButtons = document.getElementsByClassName("wrapper-dropdown");
    Array.from(dropdownButtons).forEach((dropdownButton) => {
      if (dropdownButton !== event.target.closest(".wrapper-dropdown")) {
        dropdownButton.classList.remove("active");
      } else {
        dropdownButton.classList.toggle("active");
      }
    });
  };
  return (
    <div className="filters">
      <h1>Список сотрудников</h1>
      <div className="wrapper-dropdown" onClick={handleDropdownClick}>
        <p>Должность</p>
        <img src={vectorSvg} alt="Vector" className="vector-icon" />
        <ul className="dropdown">
          <li>
            <label htmlFor="backend">Backend-разработчик</label>
            <input type="checkbox" id="backend" />
          </li>
          <li>
            <label htmlFor="frontend">Frontend-разработчик</label>
            <input type="checkbox" id="frontend" />
          </li>
          <li>
            <label htmlFor="analyst">Аналитик</label>
            <input type="checkbox" id="analyst" />
          </li>
          <li>
            <label htmlFor="manager">Менеджер</label>
            <input type="checkbox" id="manager" />
          </li>
          <li>
            <label htmlFor="designer">Дизайнер</label>
            <input type="checkbox" id="designer" />
          </li>
          <li>
            <label htmlFor="fullstack">Fullstack</label>
            <input type="checkbox" id="fullstack" />
          </li>
        </ul>
      </div>
      <div className="wrapper-dropdown" onClick={handleDropdownClick}>
        <p>Пол</p>
        <img src={vectorSvg} alt="Vector" className="vector-icon" />
        <ul className="dropdown">
          <li>
            <label htmlFor="male">Мужской</label>
            <input type="checkbox" id="male" />
          </li>
          <li>
            <label htmlFor="female">Женский</label>
            <input type="checkbox" id="female" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Filters;
