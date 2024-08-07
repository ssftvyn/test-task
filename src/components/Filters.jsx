import React, { useState } from "react";
import vectorSvg from "../img/vector.svg";

function Filters({ setGenderFilter, setPositionFilter }) {
  const [genderFilter, setGenderFilterState] = useState([]);
  const [positionFilter, setPositionFilterState] = useState([]);
  
  const handleGenderChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    setGenderFilterState((prevState) => {
      if (isChecked) {
        return [...prevState, value];
      } else {
        return prevState.filter((item) => item !== value);
      }
    });
    setGenderFilter((prevState) =>
      isChecked ? [...prevState, value] : prevState.filter((item) => item !== value)
    );
  };
  
  const handlePositionChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    setPositionFilterState((prevState) => {
      if (isChecked) {
        return [...prevState, value];
      } else {
        return prevState.filter((item) => item !== value);
      }
    });
    setPositionFilter((prevState) =>
      isChecked ? [...prevState, value] : prevState.filter((item) => item !== value)
    );
  };
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
    <div className="filters-search-selected">
      <div className="filters">
        <h1>Список сотрудников</h1>
        <div className="wrapper-dropdown" onClick={handleDropdownClick}>
          <p>Должность</p>
          <img src={vectorSvg} alt="Vector" className="vector-icon" />
          <ul className="dropdown">
            <li>
              <label htmlFor="backend">Backend-разработчик</label>
              <input type="checkbox" id="backend" value="Backend-разработчик" checked={positionFilter.includes('Backend-разработчик')} onChange={handlePositionChange} />
            </li>
            <li>
              <label htmlFor="frontend">Frontend-разработчик</label>
              <input type="checkbox" id="frontend" value="Frontend-разработчик" checked={positionFilter.includes('Frontend-разработчик')} onChange={handlePositionChange} />
            </li>
            <li>
              <label htmlFor="analyst">Аналитик</label>
              <input type="checkbox" id="analyst" value="Аналитик" checked={positionFilter.includes('Аналитик')} onChange={handlePositionChange} />
            </li>
            <li>
              <label htmlFor="manager">Менеджер</label>
              <input type="checkbox" id="manager" value="Менеджер" checked={positionFilter.includes('Менеджер')} onChange={handlePositionChange} />
            </li>
            <li>
              <label htmlFor="designer">Дизайнер</label>
              <input type="checkbox" id="designer" value="Дизайнер" checked={positionFilter.includes('Дизайнер')} onChange={handlePositionChange} />
            </li>
            <li>
              <label htmlFor="fullstack">Fullstack</label>
              <input type="checkbox" id="fullstack" value="Fullstack" checked={positionFilter.includes('Fullstack')} onChange={handlePositionChange} />
            </li>
          </ul>
        </div>
        <div className="wrapper-dropdown" onClick={handleDropdownClick}>
          <p>Пол</p>
          <img src={vectorSvg} alt="Vector" className="vector-icon" />
          <ul className="dropdown">
            <li>
              <label htmlFor="male">Мужской</label>
              <input type="checkbox" id="male" value="Мужчина" checked={genderFilter.includes('Мужчина')} onChange={handleGenderChange} />
            </li>
            <li>
              <label htmlFor="female">Женский</label>
              <input type="checkbox" id="female" value="Женщина" checked={genderFilter.includes('Женщина')} onChange={handleGenderChange} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filters;