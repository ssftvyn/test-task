import React from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Filters from '../components/Filters';
import Search from '../components/Search';
import SelectedFilters from '../components/SelectedFilters';
import ListInfo from '../components/ListInfo';

function EmployeeList() {
    return (
      <div className="App">
        <Header />
        <Breadcrumbs />
        <Filters />
        <Search />
        <SelectedFilters />
        <ListInfo />
      </div>
    );
  }
  
  export default EmployeeList;
