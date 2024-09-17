import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router-dom';

const InitPage = () => {
  return (
    <div className={`min-h-screen bg-slate-100 dark:bg-slate-900`}>
      <NavBar/>
      <main className="pt-16 z-10 overflow-auto min-h-full w-full ">
        <Outlet />
      </main>
    </div>
    
  );
};

export default InitPage;