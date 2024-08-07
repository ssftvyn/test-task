import React from 'react';
import ProfileInfo from '../components/ProfileInfo';

function EmployeeProfile({ id }) {
  return (
    <div className="App">
      <ProfileInfo id={id} />
    </div>
  );
}

export default EmployeeProfile;