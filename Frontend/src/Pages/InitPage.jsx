import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

const InitPage = () => {
  return (
    <div className="flex min-h-screen bg-slate-300 dark:bg-slate-800">
      <NavBar/>
      <main className="pt-16 z-10 overflow-auto min-h-full w-full ">
        <Outlet />
      </main>
    </div>
    
    
  );
};

export default InitPage;