import React, { useState } from 'react';
import Header from '../components/Dashboard/Header';
import Drawer from '../components/Dashboard/Drawer';
import { Outlet } from 'react-router-dom';

const Doctor: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='flex flex-row'>
      <div className=''>
        <Drawer />
      </div>
      <div className='flex flex-col w-full'>
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} patients={[]} />
        <Outlet context={{ searchQuery }} />
      </div>
    </div>
  );
};

export default Doctor;
