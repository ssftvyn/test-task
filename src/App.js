import React from 'react';
import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import EmployeeList from './pages/EmployeeList';
import EmployeeProfile from './pages/EmployeeProfile';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Breadcrumbs />
        <Routes>
          <Route path="/employee" element={<EmployeeList />} />
          <Route path="/employee/:id" element={<EmployeeProfile />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;