import React from "react";
import Filters from "../components/Filters";
import Search from "../components/Search";
import SelectedFilters from "../components/SelectedFilters";
import ListInfo from "../components/ListInfo";
import Breadcrumbs from "../components/Breadcrumbs";

function EmployeeList() {
  return (
    <div className="App">
      <Breadcrumbs />
      <Filters />
      <Search />
      <SelectedFilters />
      <ListInfo />
    </div>
  );
}

export default EmployeeList;
