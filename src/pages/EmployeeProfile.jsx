import React from 'react';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import ProfileInfo from '../components/ProfileInfo';

function EmployeeProfile() {
    return (
      <div className="App">
        <Header />
        <Breadcrumbs />
        <ProfileInfo />
      </div>
    );
  }
  
  export default EmployeeProfile;
