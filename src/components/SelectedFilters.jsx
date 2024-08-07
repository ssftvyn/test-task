import React from "react";
import "../style.css";

function SelectedFilters() {
  return (
    <div className="selected-filters">
      <p>Выбранные фильтры:</p>
      <ul>
        <li>Fullstack</li>
        <li>Женщина</li>
      </ul>
      <button className="find-button">Найти</button>
    </div>
  );
}

export default SelectedFilters;
