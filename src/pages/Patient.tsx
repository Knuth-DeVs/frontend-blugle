import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Dashboard/Sidebar';

const Patient: React.FC = () => {

  return (
    <div className='flex flex-row'>
      <div className=''>
        <Sidebar />
      </div>
      <div className='flex flex-col w-full'>
        <Outlet />
      </div>
    </div>
  );
};

export default Patient;
