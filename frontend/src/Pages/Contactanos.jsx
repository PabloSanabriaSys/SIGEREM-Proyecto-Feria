import React from 'react';
import CardWithForm from '../components/CardWithForm';

const Contactanos = () => {
  return (
    <div className="p-0 w-full bg-background">
      <div className='bg-black h-screen grid grid-cols-1 md:grid-cols-2'>
        <div className='rounded grid justify-center items-center w-full h-full'>
          <video className=" w-full sm:max-w-xs md:max-w-md lg:max-w-lg h-auto" autoPlay loop muted>
            <source src="./videos/VideoOficialContact.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        <div className='rounded grid justify-center items-center'>
          <CardWithForm/> 
        </div>

      </div>
    </div>
    
  );
};

export default Contactanos;