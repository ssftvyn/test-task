import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ListInfo({ searchQuery, genderFilter, positionFilter }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://frontend-test-api.stk8s.66bit.ru/api/Employee?page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const responseData = await response.json();
      setData((prevData) => [...prevData, ...responseData]);
      setIsLoading(false);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      !isLoading
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading]);

  const handleItemClick = (id) => {
    navigate(`/employee/${id}`, { state: { id } });
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (genderFilter.length === 0 || genderFilter.includes(item.gender)) &&
    (positionFilter.length === 0 || positionFilter.includes(item.position))
  );

  return (
    <div>
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
        {isLoading && <div>Loading...</div>}
      </div>
    </div>
  );
}

export default ListInfo;
