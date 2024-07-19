import React from 'react'
import Header from '../components/Dashboard/Header';
import Drawer from '../components/Dashboard/Drawer';
import { Outlet } from 'react-router-dom';

const Doctor: React.FC = () => {

  return (
    <div className='flex flex-row'>
        <div className=''>
            <Drawer/>
        </div>
        <div className='flex flex-col w-full'>
            <Header/>
            <Outlet/>
        </div>    
    </div>
  )
}

export default Doctor