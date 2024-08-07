import React from "react";
import "../style.css";

function SelectedFilters({ positionFilter, genderFilter, onFindButtonClick }) {
  return (
    <div className="selected-filters">
      <p>Выбранные фильтры:</p>
      <ul>
        {positionFilter.map((position) => (
          <li key={position}>{position}</li>
        ))}
        {genderFilter.map((gender) => (
          <li key={gender}>{gender}</li>
        ))}
      </ul>
    </div>
  );
}

export default SelectedFilters;
