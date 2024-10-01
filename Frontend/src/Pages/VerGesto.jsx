import  React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
const VerGesto = () => {
    const { id } = useParams();  // Obtener el ID del gesto desde la URL
    const location = useLocation();  // Obtener el estado pasado desde Link
    const { title } = location.state || {};  // Extraer el título del estado

  
    return (
        <div className="bg-background p-4">
        <h1 className="text-2xl text-center font-bold sm:text-3xl md:text-4xl lg:text-5xl/none p-4">
            GESTO: {title} 
        </h1>
        <div className='grid grid-cols-2 justify-items-center'>
            <div className="relative italic">
                <h1 className='items-center'>Imite la imagen que se encuentra abajo 👇</h1>
                <img 
                className="border-double border-4 border-yellow-400 rounded-lg w-96" 
                alt={title} 
                src={`../public/images/FigurasMil/${id}.png`}  
                />
            </div>
            <div>
                <h1>
                    VIDEO
                </h1>
            </div>
        </div>
        
    </div>
    
  );
};

export default VerGesto;