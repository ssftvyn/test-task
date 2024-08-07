import React, { useState } from "react";
import Filters from "../components/Filters";
import ListInfo from "../components/ListInfo";
import Breadcrumbs from "../components/Breadcrumbs";
import Search from "../components/Search";
import SelectedFilters from "../components/SelectedFilters";

function EmployeeList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [genderFilter, setGenderFilter] = useState([]);
  const [positionFilter, setPositionFilter] = useState([]);

  return (
    <div className="App">
      <Breadcrumbs />
      <Filters
        setGenderFilter={setGenderFilter}
        setPositionFilter={setPositionFilter}
      />
      <Search onSearch={setSearchQuery} />
      <SelectedFilters
        positionFilter={positionFilter}
        genderFilter={genderFilter}
      />
      <ListInfo
        searchQuery={searchQuery}
        genderFilter={genderFilter}
        positionFilter={positionFilter}
      />
    </div>
  );
}

export default EmployeeList;