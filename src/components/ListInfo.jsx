import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ListInfo() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://frontend-test-api.stk8s.66bit.ru/api/Employee', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, []);

  const handleItemClick = (id) => {
    navigate(`/employee/${id}`, { state: { id } });
  };
  
  return (
    <div>
      <div className="info">
        <p>ФИО</p>
        <p>Должность</p>
        <p>Номер телефона</p>
        <p>Дата рождения</p>
      </div>

      <div className="info-list">
        {data.map((item, index) => (
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