
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import vectorSvg from "../img/vector.svg";

function ListInfo({ searchQuery }) {
  const [data, setData] = useState([]);
  const [genderFilter, setGenderFilter] = useState('');
  const [positionFilter, setPositionFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://frontend-test-api.stk8s.66bit.ru/api/Employee",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, []);

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

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (genderFilter === '' || item.gender === genderFilter) &&
    (positionFilter === '' || item.position === positionFilter)
  );

  const handleItemClick = (id) => {
    navigate(`/employee/${id}`, { state: { id } });
  };

  const handleGenderChange = (event) => {
    setGenderFilter(event.target.value);
  };

  const handlePositionChange = (event) => {
    setPositionFilter(event.target.value);
  };

  return (
    <div>
      <div className="filters">
        <h1>Список сотрудников</h1>
        <div className="wrapper-dropdown" onClick={handleDropdownClick}>
          <p>Должность</p>
          <img src={vectorSvg} alt="Vector" className="vector-icon" />
          <ul className="dropdown">
            <li>
              <label htmlFor="backend">Backend-разработчик</label>
              <input type="checkbox" id="backend" value="Backend-разработчик" checked={positionFilter === 'Backend-разработчик'} onChange={handlePositionChange} />
            </li>
            <li>
              <label htmlFor="frontend">Frontend-разработчик</label>
              <input type="checkbox" id="frontend" value="Frontend-разработчик" checked={positionFilter === 'Frontend-разработчик'} onChange={handlePositionChange} />
            </li>
            <li>
              <label htmlFor="analyst">Аналитик</label>
              <input type="checkbox" id="analyst" value="Аналитик" checked={positionFilter === 'Аналитик'} onChange={handlePositionChange} />
            </li>
            <li>
              <label htmlFor="manager">Менеджер</label>
              <input type="checkbox" id="manager" value="Менеджер" checked={positionFilter === 'Менеджер'} onChange={handlePositionChange} />
            </li>
            <li>
              <label htmlFor="designer">Дизайнер</label>
              <input type="checkbox" id="designer" value="Дизайнер" checked={positionFilter === 'Дизайнер'} onChange={handlePositionChange} />
            </li>
            <li>
              <label htmlFor="fullstack">Fullstack</label>
              <input type="checkbox" id="fullstack" value="Fullstack" checked={positionFilter === 'Fullstack'} onChange={handlePositionChange} />
            </li>
          </ul>
        </div>
        <div className="wrapper-dropdown" onClick={handleDropdownClick}>
          <p>Пол</p>
          <img src={vectorSvg} alt="Vector" className="vector-icon" />
          <ul className="dropdown">
            <li>
              <label htmlFor="male">Мужской</label>
              <input type="radio" id="male" value="Мужчина" checked={genderFilter === 'Мужчина'} onChange={handleGenderChange} />
            </li>
            <li>
              <label htmlFor="female">Женский</label>
              <input type="radio" id="female" value="Женщина" checked={genderFilter === 'Женщина'} onChange={handleGenderChange} />
            </li>
          </ul>
        </div>
      </div>
      <div className="info">
        <p>ФИО</p>
        <p>Должность</p>
        <p>Номер телефона</p>
        <p>Дата рождения</p>
      </div>

      <div className="info-list">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="info-item"
            onClick={() => handleItemClick(item.id)}
          >
            <p>{item.name}</p>
            <p>{item.position}</p>
            <p>{item.phone}</p>
            <p>{item.birthdate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListInfo;