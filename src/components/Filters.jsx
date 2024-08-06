import React from "react";
import "../style.css";
import vectorSvg from "../img/vector.svg";

function Filters() {
  const handleDropdownClick = () => {
    const dropdownButton =
      document.getElementsByClassName("wrapper-dropdown")[0];
    if (dropdownButton) {
      dropdownButton.classList.toggle("active");
    }
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
    </div>
  );
}

export default Filters;
