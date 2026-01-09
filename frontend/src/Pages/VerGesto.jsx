import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CameraRecognition from '../components/general/CameraRecognition';
import InfoDialog from '../components/general/InfoDialog';
import { files } from '../components/constants/FilesImagesGestos'; // Importar las constantes

const VerGesto = () => {
    const { id } = useParams();  // Obtener el ID del gesto desde la URL
    const location = useLocation();  // Obtener el estado pasado desde Link
    const { title } = location.state || {};  // Extraer el título del estado
    const [prediccion, setPrediccion] = useState("-");
    const nombre = {
        0: "Incorrecto",
        1: "Correcto",
        100: "no_reconocido"
    };
    // Buscar el gesto correspondiente en el array 'files'
    const gesture = files.find(file => file.url === id);

    // Si no se encuentra el gesto, puedes manejarlo aquí
    const dialogContent = gesture ? gesture.dialogContent : 'Información no disponible.';
    // Determinar el estilo del párrafo basado en la predicción
    const getPredictionStyle = () => {
        switch (prediccion) {
            case "1": // Correcto
                return "bg-green-500 text-white text-2xl p-2 rounded";
            case "0": // Incorrecto
                return "bg-red-500 text-white text-2xl p-2 rounded";
            case "100": // No reconocido
                return "bg-yellow-300 text-blue-800  text-2xl p-2 rounded";
            default:
                return "";
        }
    };
    return (
        <div className="bg-background p-0  ">
            <div className='h-screen grid justify-center items-center '>
                <div className='grid justify-items-strech '>
                    
                    <h1 className="text-2xl text-center font-bold sm:text-3xl md:text-5xl lg:text-5xl/none p-4">
                        GESTO: {title}
                    </h1>
                    <div className=' justify-self-end '>
                        <InfoDialog
                            title={title}  
                            content={dialogContent} 
                        />
                    </div>
                </div>
                <div className='grid  md:grid-cols-2  justify-items-center'>
                    <div className='p-3'>
                        <CameraRecognition prediccion={prediccion} setPrediccion={setPrediccion} modelo={id} />
                    </div>
                    <div className="flex  flex-col justify-center items-center ">
                        <h1 className='items-center'>Realice el mismo gesto de la imagen 👇</h1>
                        <img
                            className=" border-4 border-white shadow-[0_0_15px_5px_rgba(255,255,255,0.6)] transition-all duration-300 bg-gray-90 rounded-lg w-full h-auto"
                            alt={title}
                            src={`/images/FigurasMil/${id}.png`}
                        />
                    </div>
                </div>
                <p className={getPredictionStyle()}>
                    {nombre[prediccion]}
                </p>
            </div>
        </div>

    );
};

export default VerGesto;