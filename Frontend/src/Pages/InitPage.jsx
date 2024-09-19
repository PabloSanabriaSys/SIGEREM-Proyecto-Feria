import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

const InitPage = () => {
  return (
    <div className={`min-h-screen bg-background`}>
      <NavBar/>
      <main className="pt-16 z-10 overflow-auto min-h-full w-full ">
        <Outlet />
      </main>
    </div>
    
  );
};

export default InitPage;