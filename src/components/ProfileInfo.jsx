// ProfileInfo.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

function ProfileInfo() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://frontend-test-api.stk8s.66bit.ru/api/Employee/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { name, photo, position, stack, phone, birthdate, dateOfEmployment } =
    data;

  return (
    <>
      <Breadcrumbs id={id} name={name} />

      <div className="grid-container">
        <img src={photo} className="photo" alt="" />
        <div className="name">{name}</div>
        <div className="position">{position}</div>
        <div className="stack">
          <ul>
            {stack.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="separator"></div>

      <div className="main-info">
        <h1>Основная информация</h1>
        <div className="info-grid">
          <div className="label">Контактный телефон:</div>
          <div className="contact">{phone}</div>
          <div className="label">Дата рождения:</div>
          <div className="birthdate">{birthdate}</div>
          <div className="label">Дата устройства:</div>
          <div className="dateOfEmployment">{dateOfEmployment}</div>
        </div>
      </div>
    </>
  );
}

export default ProfileInfo;
