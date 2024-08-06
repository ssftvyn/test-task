import React from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import SelectedFilters from './components/SelectedFilters';
import Search from './components/Search';
import ListInfo from './components/ListInfo';
import ProfileInfo from './components/ProfileInfo';

function App() {
  return (
    <div className="App">
      <Header />
      <Filters />
      <Search />
      <SelectedFilters />
      <ListInfo />
      {/* <ProfileInfo /> */}

    </div>
  );
}

export default App;