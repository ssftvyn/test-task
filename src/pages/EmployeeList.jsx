import React, { useState } from "react";
import Filters from "../components/Filters";
import ListInfo from "../components/ListInfo";
import Breadcrumbs from "../components/Breadcrumbs";
import Search from "../components/Search";
import SelectedFilters from "../components/SelectedFilters";

function EmployeeList() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <Breadcrumbs />
      {/* <Filters/> */}
      <Search onSearch={setSearchQuery} />
      <SelectedFilters />
      <ListInfo searchQuery={searchQuery} />
    </div>
  );
}

export default EmployeeList;