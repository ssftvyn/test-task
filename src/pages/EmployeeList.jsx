import React, { useState } from "react";
import Filters from "../components/Filters";
import ListInfo from "../components/ListInfo";
import Breadcrumbs from "../components/Breadcrumbs";

function EmployeeList() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <Breadcrumbs />
      <Filters onSearch={setSearchQuery} />
      <ListInfo searchQuery={searchQuery} />
    </div>
  );
}

export default EmployeeList;