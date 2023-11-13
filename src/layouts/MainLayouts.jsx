import React from 'react';
import Navbar from '../shared/Navbar/Topbar';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
  return (
    <div className=' max-w-6xl mx-auto overflow-hidden'>
      <Navbar />
      <div className=''>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayouts;