import React from "react";

function Search({ onSearch }) {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search">
      <input type="text" placeholder="Поиск..." onChange={handleSearch} />
    </div>
  );
}

export default Search;
